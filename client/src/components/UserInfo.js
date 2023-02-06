import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { UPDATE_USER } from '../utils/mutations';
import { DELETE_USER } from '../utils/mutations';



export default function UserInfo (props) {

  const [userData, setUserData] = useState({age:"", height:"", weight:""});
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleUserUpdate = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    try {
      await updateUser(userData, token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value} = event.target;

    // if (name === "age") {
      setUserData({ ...userData, [name]: value});
    // }
    console.log(userData);
  }
   
  return (
    <div className="user-container">
      <form onSubmit={handleUserUpdate}>
        <h2> Welcome {Auth.getProfile().data.username}! </h2>
        <label>Age: </label>
        <input name="age" value={userData.age} onChange={handleChange}placeholder="Input your age" />
        <label>Height: </label>
        <input name="height" value={userData.height} onChange={handleChange} placeholder="How tall are you?" />
        <label>Weight: </label>
        <input name="weight" value={userData.weight} onChange={handleChange} placeholder="How much do you weigh?" />
        {/* <button className="user-button">Delete User</button> */}
        <button onSubmit={handleUserUpdate} className="user-button">Update User</button>
      </form>
    </div>
  );
}
