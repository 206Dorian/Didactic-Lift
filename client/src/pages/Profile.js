import { Link } from "react-router-dom";
import MuscleGroups from "../components/MuscleGroups";
import Exercise from "../components/Exercise";
import UserInfo from "../components/UserInfo";

import Auth from "../utils/auth";

export default function Profile() {
  return (
    <>
    {Auth.loggedIn() ? (
      <div>
        <div>
        <UserInfo />
      </div>

      <div>
        {/* FIRST Render MuscleGroups component with buttons by default */}
        <MuscleGroups />
        <br></br>
        {/* THEN Render Exercise component 10x from API call for button selected */}
        <Exercise />
      </div>
      </div>
      
   
    ) : (
      <p>
          You need to be logged in to view exercises. Please{' '}
          <Link to="/home">login</Link>
        </p>

    )}
    </>
  );
}
