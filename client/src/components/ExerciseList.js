import React from 'react'

const ExerciseList = (props) => {
  return (
    <ul className="list-group">
    {props.results.map((result) => (
      <li className="list-group-item" key={result.name}>
        <li>{result.difficulty}</li>
      </li>
    ))}
  </ul>
  )
}

export default ExerciseList