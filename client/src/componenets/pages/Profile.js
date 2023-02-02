import React from 'react'
import { useState } from 'react';
const axios = require('axios');
const APIKey = process.env.APIKEY


const Profile = () => {
  const [muscleGroup, setMuscleGroup] = useState('');
  // const handleChange = (event) => {
  //   setMuscleGroup(event.target.value);
  // };
  const handleFormSubmit = async (muscleGroup) => {

    // require('dotenv').config();
    // event.preventDefault()
    // setMuscleGroup(muscleGroup);
    // console.log(muscleGroup)
    // const [updated, setUpdated] = useState(muscleGroup);


    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`, {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'akpoUwvyp6/ajUQ13OXQDQ==QRzmUJALDEJyYMlq'
        }
      });
      const {data}= await response.json()
      console.log('response', data)
      // return response.json();
    } catch (error) {
      console.error(error);
    }


  }


  return (
    <>

      <h2> Welcome User</h2>

      <br></br>
      <button>Search muscle group</button>

      <button>Create new workout</button>
      <br></br>
      <br></br>

      {/* **Need drop down menu here for muscle groups** */}
      <br></br>
      <container className="dropDownBtns">
        <btn onClick={() => handleFormSubmit('abdominals')} data-value='abdominals'>abdominals</btn>

        <btn>abductors </btn>

        <btn>adductors  </btn>

        <btn>biceps</btn>

        <btn>calves</btn>

        <btn>chest</btn>

        <btn>forearms</btn>

        <btn>glutes</btn>

        <btn>hamstrings</btn>

        <btn>lats</btn>

        <btn>lower_back</btn>

        <btn>middle_back</btn>

        <btn>neck</btn>

        <btn>quadriceps</btn>

        <btn>traps</btn>

        <btn>triceps</btn>

      </container>







    </>
  )
}

export default Profile