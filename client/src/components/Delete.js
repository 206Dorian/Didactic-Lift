import React from 'react'
import { DELETE_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import Auth from '../utils/auth'

const Delete = () => {
  const deleteUser = useMutation(DELETE_USER)
  const handleUserDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteUser(Auth.getProfile().username)
      console.log('delete')
    }
    catch (err) {
      console.error(err)
    }

  }

  return (
    <div>
      <button id="delete-btn" onSubmit={handleUserDelete} className="user-button">Delete User</button>
    </div>
  )
}

export default Delete