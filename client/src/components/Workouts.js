import { useQuery } from "@apollo/client";
import { USER_WORKOUTS } from "../utils/mutations";

export default function Workouts() {
  const { loading, data } = useQuery(USER_WORKOUTS);
  console.log(data);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        data.user.workouts.map((workouts) => <div key={workouts._id}>{workouts.name}</div>)
      )}
    </>
  );
}
