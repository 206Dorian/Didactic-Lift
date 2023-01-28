const { gql } = require('apollo-server-express');
//how to specify the typedefs with arrays and objectslike workouts for users
//add type defs for other queries... also add type defs for mutations? 
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: []
  }

  type Query {
    Users: [User]
  }
`;

module.exports = typeDefs;
