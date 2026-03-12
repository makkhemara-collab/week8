import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color
    let scoreColor = "#f44336"; // red

    if (score >= 4 && score <= 7) {
      scoreColor = "#f3bc47"; // orange
    }

    if (score >= 8) {
      scoreColor = "#4caf50"; // green
    }

    // 3 - Return style
    return {
      width: scoreWidth,
      backgroundColor: scoreColor
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>

        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />

        <div className="score-bar">
          <div
            className="score-bar-value"
            style={getScoreBarStyle()}
          ></div>
        </div>
      </div>
    </>
  );
}