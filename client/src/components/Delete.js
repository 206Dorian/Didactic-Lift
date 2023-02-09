import React from 'react'
import { DELETE_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import Auth from '../utils/auth'


const Delete = () => {

  const [deleteUser, { error }] = useMutation(DELETE_USER)
  const handleUserDelete = async (event) => {
    event.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null
    console.log(token)

    console.log(token.username)
    try {
      const { data } = await deleteUser({
        variables: token.username

      })

    }
    catch (err) {
      console.error(error)
    }

  }

  return (
    <div>
      <button id="delete-btn" onSubmit={handleUserDelete} className="user-button">Delete My Stats</button>
    </div>
  )
}

export default Delete