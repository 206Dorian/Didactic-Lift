import "./Exercise.css";


export default function Exercise(props) {
  return (
    <div>
    {Array.from(props.query).map((query) => (
    <div className="exercise-container">
      <form className="card-container">
        <p className="exercise-name">{query.name}</p>
        <div className="card-info">
          <p>Type: {query.type}</p>
          <p>Difficulty: {query.difficulty}</p>
          <p>Equipment: {query.equipment}</p>
          <p>Muscle Group: {query.muscle}</p>
        </div>
        <div id="instructions-section-title">Instructions</div>
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
