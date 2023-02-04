import { Link } from "react-router-dom";
import Workouts from "../components/Workouts"

export default function Profile() {
 
  return (
    <>
      <h2> Welcome User</h2>

      <button>Search muscle group</button>
      <button>
        <Link to="/Workout">Create new workout</Link></button>
      <br></br>
      <br></br>
      <h2>My Workouts</h2>
      <Workouts />
      <br></br>

    </>
  );
};

