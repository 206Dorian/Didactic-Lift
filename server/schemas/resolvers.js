const { Exercise, User, Workouts } = require('../models');


const resolvers = {
  Query: {
    Exercises: async () => {
      return await Exercise.find({});
    }
  },
  Query: {
    Users: async () => {
      return await User.find({});
    }
  },
  Query: {
    Workouts: async () => {
      return await Workouts.find({});
    }
  }
};

module.exports = resolvers;
