import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

import { UPDATE_USER, DELETE_USER } from "../utils/mutations";

export default function UserInfo() {

  const [updateFormState, setUpdateFormState] = useState([]);

  const updateUser = useMutation(UPDATE_USER);

  const deleteUser = useMutation(DELETE_USER);


  return (
    <>
      <div className="user-container">
        <form>
          <h2> Welcome {Auth.getProfile().data.username}! </h2>
          <label>Age: </label>
          <input placeholder="Input your age" />
          <label>Height: </label>
          <input placeholder="How tall are you?" />
          <label>Weight: </label>
          <input placeholder="How much do you weigh?" />
          <button className="user-button" onClick={deleteUser}>
            Delete User
          </button>
          <button 
          className="user-button"
          >Update User</button>
        </form>
      </div>
    </>
  );
}
