import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const APIKey = process.env.REACT_APP_APIKEY


const Profile = () => {
  const [muscleGroup, setMuscleGroup] = useState('');
  // const handleChange = (event) => {
  //   setMuscleGroup(event.target.value);
  // };
  const handleFormSubmit = async (muscleGroup) => {

    // require('dotenv').config();
    // event.preventDefault()
    setMuscleGroup(muscleGroup);
    console.log(muscleGroup)
    // const [updated, setUpdated] = useState(muscleGroup);
    const options = {headers: 
        
      {'X-Api-Key': 'akpoUwvyp6/ajUQ13OXQDQ==QRzmUJALDEJyYMlq'}
    }

    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`, options);
      const {data}= await response
      console.log('response', data)
      // return response.json();
    } catch (error) {
      console.error(error);
    }


  }


  return (
    <>

      <h2> Welcome User</h2>

      <button>Search muscle group</button>

      <button>My Workouts</button>

      <button>Create new workout</button>
      <br></br>
     <br></br>

      <br></br>
      
      
      <container className="dropDownBtns">
        <btn onClick={() => handleFormSubmit('abdominals')} data-value='abdominals'>abdominals</btn>

        <btn onClick={() => handleFormSubmit('abductors')} >abductors </btn>

        <btn onClick={() => handleFormSubmit('adductors')} >adductors  </btn>

        <btn onClick={() => handleFormSubmit('biceps')} >biceps</btn>

        <btn onClick={() => handleFormSubmit('calves')} >calves</btn>

        <btn onClick={() => handleFormSubmit('chest')} >chest</btn>

        <btn onClick={() => handleFormSubmit('forearms')} >forearms</btn>

        <btn onClick={() => handleFormSubmit('glutes')} >glutes</btn>

        <btn onClick={() => handleFormSubmit('hamstrings')} >hamstrings</btn>

        <btn onClick={() => handleFormSubmit('lats')} >lats</btn>

        <btn onClick={() => handleFormSubmit('lower_back')} >lower_back</btn>

        <btn onClick={() => handleFormSubmit('midde_back')} >middle_back</btn>

        <btn onClick={() => handleFormSubmit('neck')} >neck</btn>

        <btn onClick={() => handleFormSubmit('quadriceps')} >quadriceps</btn>

        <btn onClick={() => handleFormSubmit('traps')} >traps</btn>

        <btn onClick={() => handleFormSubmit('triceps')} >triceps</btn>

      </container>







    </>
  )
}

export default Profile