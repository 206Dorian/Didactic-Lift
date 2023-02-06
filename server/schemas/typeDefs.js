const { gql } = require('apollo-server-express');
//how to specify the typedefs with arrays and objectslike workouts for users
//add type defs for other queries... also add type defs for mutations? 
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  age: String
  height: String
  weight: String
 
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


type Auth {
  token: ID
  user: User
} 

  type Query {
    Users: [User]
    user: User
    Exercises:[Exercise]
    me: User
  }



  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    deleteUser(username: String!): User
    updateUser(height: String!, weight: String!, age: String!): User 
  }

`;

module.exports = typeDefs;
