const { Exercise, User, workoutSchema } = require('../models');
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




    Users: async (parent, args, context) => {
      return await User.find()

    },
    user: async (parent, args, context) => {
      return await User.findById(context.user._id)
      .populate({
        path: 'workouts',
        populate: { path: 'workout' }
      });
    }
    // Workouts: async () => {
    //   return await workoutSchema.find({});
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

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
        const workout = await workoutSchema.create(
          [Exercise]
        );

        await User.findOneAndUpdate(
          { username },
          { $addToSet: { workouts: workoutSchema._id } }
        );
        return workout;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    deleteUser: async (parent, username) => {
      const user = await User.findOneAndDelete(username);
      

      return (`We will miss you ${user}`);
    },
  }
};

module.exports = resolvers;
