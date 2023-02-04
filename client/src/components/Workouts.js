import { useQuery } from "@apollo/client";
import { USER_WORKOUTS } from "../utils/mutations";

export default function Workouts() {
  const { loading, data } = useQuery(USER_WORKOUTS);
  console.log(data);
  return (
    <>
      {/* {loading ? (
        <div>loading</div>
      ) : (
        data.user.workouts.workout.map((workout) => <div key={workout._id}>{workout.name}</div>)
      )} */}
    </>
  );
}
