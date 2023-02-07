import { useQuery } from "@apollo/client";
import { USER_ } from "../utils/mutations";
import "./Exercise.css";

export default function Exercise() {
  return (
    <div className="exercise-container">
      <form className="card-container">
        <p className="exercise-name">name</p>
        <div className="card-info">
          <p className="exercise-type">strength</p>
          <p className="exercise-difficulty">super hard</p>
          <p className="exercise-equipment">machine</p>
        </div>
        <div className="exercise-instructions">
          Starting position, hold your body at arm's length with your arms
          nearly locked above the bars. Now, inhale and slowly lower yourself
          downward. Your torso should remain upright and your elbows should stay
          close to your body. This helps to better focus on tricep involvement.
          Lower yourself until there is a 90 degree angle formed between the
          upper arm and forearm. Then, exhale and push your torso back up using
          your triceps to bring your body back to the starting position. Repeat
          the movement for the prescribed amount of repetitions. Variations: If
          you are new at this exercise and do not have the strength to perform
          it, use a dip assist machine if available. These machines use weight
          to help you push your bodyweight. Otherwise, a spotter holding your
          legs can help. More advanced lifters can add weight to the exercise by
          using a weight belt that allows the addition of weighted plates.
        </div>
      </form>
      <button id="back-btn">Go back</button>
      {/* Render Exerice and Exercise info */}
    </div>
  );
}
