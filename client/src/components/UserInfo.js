import React, { useState } from "react";
import { UPDATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import Delete from "./Delete";
import Logout from "./Logout";
import "./UserInfo.css";

export default function UserInfo(props) {
  const [userData, setUserData] = useState({ age: "", height: "", weight: "" });
  const [updateUser] = useMutation(UPDATE_USER);

  const handleUserUpdate = async (event) => {
    event.preventDefault();

    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    try {
      await updateUser({ variables: { ...userData } });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };


  console.log(Auth.getProfile().data);
  
  let userAge = Auth.getProfile().data.age;
  let userWeight = Auth.getProfile().data.weight;
  let userHeight = Auth.getProfile().data.height;

  return (
    <div className="user-container">
      <form onSubmit={handleUserUpdate}>
        <h2 className="user-welcome">
          {" "}
          Welcome<br></br>
          {Auth.getProfile().data.username}!{" "}
        </h2>
        {[userAge, userHeight, userWeight] ? (
          <div>
            {" "}

            <h3 className="user-stats">
              {/* this pulls the data from the database */}
              You're <p className="stat-fig">{userAge}</p>
            </h3>
            <h3 className="user-stats">
              You're <p className="stat-fig">{userHeight}</p>
            </h3>
            <h3 className="user-stats">
              You weigh <p className="stat-fig">{userWeight}</p>
            </h3>
          </div>
        ) : (
          <h3 className="ice-breaker">
            We should get to know each other better:
          </h3>
        )}
        <div className="input-container">
          <label className="input-label">Age: </label>
          <input
            className="input"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="Input your age"
          />
          <label className="input-label">Height: </label>
          <input
            className="input"
            name="height"
            value={userData.height}
            onChange={handleChange}
            placeholder="How tall are you?"
          />
          <label className="input-label">Weight: </label>
          <input
            className="input"
            name="weight"
            value={userData.weight}
            onChange={handleChange}
            placeholder="How much do you weigh?"
          />
        </div>
        <button onSubmit={handleUserUpdate} className="user-button">
          Update User
        </button>
        <Delete />
        <br></br>
        <Logout />
      </form>
    </div>
  );
}
