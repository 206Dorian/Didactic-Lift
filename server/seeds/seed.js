const db = require('../config/connection');
const { User, Exercise } = require('../models');
const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');

db.once('open', async () => {

  await User.deleteMany({});
  await Exercise.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const exercises = await Exercise.insertMany(exerciseData);

  console.log('all done!');
  process.exit(0);
});
