import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_USER } from '../utils/mutations';
import { DELETE_USER } from '../utils/mutations';


export default function UserInfo(props) {

    const {user, setUser } = useState()

  return (
    <div className="user-container">
      <form>
        <h2> Welcome User</h2>
        <label>Age: </label>
        <input placeholder="Input your age" />
        <label>Height: </label>
        <input placeholder="How tall are you?" />
        <label>Weight: </label>
        <input placeholder="How much do you weigh?" />
        <button className="user-button">Delete User</button>
        <button className="user-button">Update User</button>
      </form>
      {/* Render User info */}
    </div>
  );
}
