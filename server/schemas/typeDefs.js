const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
