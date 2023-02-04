import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const APIKey = process.env.APIKEY


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

      <Link to = "/Workout"
      >My Workouts</Link>

      <button>Create new workout</button>
      <br></br>
     <br></br>

      <br></br>
      
      
      <container className="dropDownBtns">
        <button onClick={() => handleFormSubmit('abdominals')} data-value='abdominals'>abdominals</button>

        <button onClick={() => handleFormSubmit('abductors')} >abductors </button>

        <button onClick={() => handleFormSubmit('adductors')} >adductors  </button>

        <button onClick={() => handleFormSubmit('biceps')} >biceps</button>

        <button onClick={() => handleFormSubmit('calves')} >calves</button>

        <button onClick={() => handleFormSubmit('chest')} >chest</button>

        <button onClick={() => handleFormSubmit('forearms')} >forearms</button>

        <button onClick={() => handleFormSubmit('glutes')} >glutes</button>

        <button onClick={() => handleFormSubmit('hamstrings')} >hamstrings</button>

        <button onClick={() => handleFormSubmit('lats')} >lats</button>

        <button onClick={() => handleFormSubmit('lower_back')} >lower_back</button>

        <button onClick={() => handleFormSubmit('midde_back')} >middle_back</button>

        <button onClick={() => handleFormSubmit('neck')} >neck</button>

        <button onClick={() => handleFormSubmit('quadriceps')} >quadriceps</button>

        <button onClick={() => handleFormSubmit('traps')} >traps</button>

        <button onClick={() => handleFormSubmit('triceps')} >triceps</button>

      </container>







    </>
  )
}

export default Profile