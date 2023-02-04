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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const USER_WORKOUTS = gql`
query user {
  user {
    workouts {
      name
      exercises {
        name
        instructions
        equipment
        muscle
        difficulty
        type
        _id
      }
    }
  }
}
`