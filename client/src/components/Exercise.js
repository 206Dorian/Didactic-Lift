import "./Exercise.css";


export default function Exercise(props) {
    console.log(props)
  return (
    <div>
    {Array.from(props.query).map((query) => (
    <div className="exercise-container">
      <form className="card-container">
        <p className="exercise-name">{query.name}</p>
        <div className="card-info">
          <p className="exercise-type">Type: {query.type}</p>
          <p className="exercise-difficulty">Difficulty: {query.difficulty}</p>
          <p className="exercise-equipment">Equipment: {query.equipment}</p>
          <p className="muscle">Muscle Group: {query.muscle}</p>
        </div>
        <div className="exercise-instructions">
        {query.instructions}
        </div>
      </form>
      <button id="back-btn">Go back</button>
      </div>
    ))}
    </div>

  );
}
