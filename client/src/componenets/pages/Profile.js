import React from 'react'

const Profile = () => {
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
    <btn>abdominals</btn>  
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