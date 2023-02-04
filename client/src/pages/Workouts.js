import { useQuery } from "@apollo/client"
import { USER_WORKOUTS } from "../utils/mutations"

export default function Workouts(){
    const { loading, data } = useQuery(USER_WORKOUTS)
    console.log(data)
return (
    <>
    <h1>My Workouts</h1>
    { loading ? (<div>loading</div>): data.user.workouts.map((workout) => (<div key={workout._id}> 
        {workout.exercises.map((exercise) => (<div key={exercise._id}></div>))}
    </div>))} 
    </>
    

)

}