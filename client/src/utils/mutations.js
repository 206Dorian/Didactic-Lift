import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $userame: String!
   $email: String!
    $password: String!
  ) {
    addUser(
      username: $userame
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
