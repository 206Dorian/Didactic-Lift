const db = require('../config/connection');
const { User, Exercise, Workouts } = require('../models');
// update these
const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const exerciseData = require('./exerciseData.json');

db.once('open', async () => {
  // clean database
  //do we want to clean the DB of the workouts? is this section needed... the more i think of it i think we do cuz this is just seeding the DB but lets confirm 
  await User.deleteMany({});
  await Workouts.deleteMany({});
  await Exercise.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const workouts = await Workouts.insertMany(workoutData);
  const exercises = await Exercise.insertMany(exerciseData);

  for (newWorkout of workouts) {
    // randomly add each workout to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.workouts.push(newWorkout._id);
    await tempUser.save();

    // randomly add a exercise to each workout
    //not sure we need this this is carried over from an example 
    const tempExercise = exercises[Math.floor(Math.random() * exercises.length)];
    newWorkout.exercise = tempExercise._id;
    await newWorkout.save();

    // reference workout on exercise model, too
    tempExercise.workouts.push(newWorkout._id);
    await tempExercise.save();
  }

  console.log('all done!');
  process.exit(0);
});
