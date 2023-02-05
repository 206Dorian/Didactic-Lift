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
  mutation addUser($username: String!, $email: String!, $password: String!, $height: String, $weight: String, $age: String) {
    addUser(username: $username, email: $email, password: $password, height:$height, age: $age, weight: $weight) {
      token
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser($username: String!){ 
    deleteUser(username:$username)
}
`

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $age: String, $height: String, $weight: String) {
    updateUser(username: $username, age: $age, height: $height, weight: $weight)
    }
`