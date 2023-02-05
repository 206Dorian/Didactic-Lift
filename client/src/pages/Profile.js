import { Link } from "react-router-dom";
import MuscleGroups from "../components/MuscleGroups";
import Exercise from "../components/Exercise";
import UserInfo from "../components/UserInfo";

export default function Profile() {
  return (
    <>
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
    </>
  );
}
