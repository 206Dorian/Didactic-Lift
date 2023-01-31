const { gql } = require('apollo-server-express');
//how to specify the typedefs with arrays and objectslike workouts for users
//add type defs for other queries... also add type defs for mutations? 
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  workouts: [Exercise]!
}

type Exercise {
  _id: ID
  name: String
  type: String
  muscle: String
  equipment: String
  difficulty: String
  instructions: String
}
type Workout{
  name: String
}

type Auth {
  token: ID!
  user: User
}

  type Query {
    Users: [User]
    user(username: String!): User
    Exercises:[Exercise]
    me: User
  }



  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(workoutText: String!): Workout
    removeWorkout(workoutId: ID!): Workout
  }

`;

module.exports = typeDefs;
