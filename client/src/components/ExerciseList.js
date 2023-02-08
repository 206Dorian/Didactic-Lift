import React from 'react'

const ExerciseList = (props) => {
  return (
    <ul className="list-group">
    {props.query.map((query) => (
      <li className="list-group-item" key={query.name}>
        <li>{query.difficulty}</li>
      </li>
    ))}
  </ul>
  )
}

export default ExerciseList