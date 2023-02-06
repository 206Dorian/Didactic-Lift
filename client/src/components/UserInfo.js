import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { UPDATE_USER } from '../utils/mutations';
import { DELETE_USER } from '../utils/mutations';


export default function UserInfo (props) {
   
  return (
    <div className="user-container">
      <form>
        <h2> Welcome {Auth.getProfile().data.username}! </h2>
        <label>Age: </label>
        <input placeholder="Input your age" />
        <label>Height: </label>
        <input placeholder="How tall are you?" />
        <label>Weight: </label>
        <input placeholder="How much do you weigh?" />
        <button className="user-button">Delete User</button>
        <button className="user-button">Update User</button>
      </form>
    </div>
  );
}
