import { Link } from "react-router-dom";
import MuscleGroups from "../components/MuscleGroups";
import Exercise from "../components/Exercise";
import UserInfo from "../components/UserInfo";
import { useState } from "react";
import Auth from "../utils/auth";

export default function Profile() {
  const [query, setQuery] = useState("")

  return (
    <>
      {Auth.loggedIn() ? (
        <div>
          <br></br>
          <div>
            <UserInfo />
          </div>
          <div>
            {/* FIRST Render MuscleGroups component with buttons by default */}
            <MuscleGroups onQuery={setQuery} />
            <br></br>
            {/* THEN Render Exercise component 10x from API call for button selected */}
            <Exercise query={query} />
          </div>
        </div>


      ) : (
        <p>
          You need to be logged in to view exercises. Please{' '}
          <Link to="/">login</Link>
        </p>


      )}
    </>
  );
}
