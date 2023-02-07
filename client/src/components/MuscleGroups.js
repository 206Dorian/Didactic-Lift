import { useQuery } from "@apollo/client";
import { useState } from "react";
import axios from "axios";
import "./MuscleGroups.css";

export default function Workout() {
  const [muscleGroup, setMuscleGroup] = useState("");
  // const handleChange = (event) => {
  //   setMuscleGroup(event.target.value);
  // };
  const handleFormSubmit = async (muscleGroup) => {
    // event.preventDefault()
    setMuscleGroup(muscleGroup);
    console.log(muscleGroup);
    // const [updated, setUpdated] = useState(muscleGroup);
    const options = {
      headers: { "X-Api-Key": "akpoUwvyp6/ajUQ13OXQDQ==QRzmUJALDEJyYMlq" },
    };

    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
        options
      );
      const { data } = await response;
      console.log("response", data);
      // return response.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <p id="muscle-section-title">Muscle Groups</p>
      <div className="dropDownBtns">
        <button onClick={() => handleFormSubmit("abdominals")}>Abdominals</button>

        <button onClick={() => handleFormSubmit("abductors")}>Abductors</button>

        <button onClick={() => handleFormSubmit("adductors")}>Adductors</button>

        <button onClick={() => handleFormSubmit("biceps")}>Biceps</button>

        <button onClick={() => handleFormSubmit("calves")}>Calves</button>

        <button onClick={() => handleFormSubmit("chest")}>Chest</button>

        <button onClick={() => handleFormSubmit("forearms")}>Forearms</button>

        <button onClick={() => handleFormSubmit("glutes")}>Glutes</button>

        <button onClick={() => handleFormSubmit("hamstrings")}>Hamstrings</button>

        <button onClick={() => handleFormSubmit("lats")}>Lats</button>

        <button onClick={() => handleFormSubmit("lower_back")}>Lower Back</button>

        <button onClick={() => handleFormSubmit("middle_back")}>Middle Back</button>

        <button onClick={() => handleFormSubmit("neck")}>Neck</button>

        <button onClick={() => handleFormSubmit("quadriceps")}>Quadriceps</button>

        <button onClick={() => handleFormSubmit("traps")}>Traps</button>

        <button onClick={() => handleFormSubmit("triceps")}>Triceps</button>
      </div>
    </>
  );
}
