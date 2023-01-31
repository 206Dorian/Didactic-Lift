const { Exercise, User, Workouts } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    Exercises: async () => {
      return await Exercise.find({});
    },

    Users: async () => {
      return await User.find({});
    },

    Workouts: async () => {
      return await Workouts.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addWorkout: async (parent, { Exercise }, context) => {
      if (context.user) {
        const workout = await Workout.create(
        [Exercise]
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workouts: workout._id } }
        );
        return workout;
      }
      throw new AuthenticationError('You need to be logged in!');
    }



  }
};

module.exports = resolvers;
