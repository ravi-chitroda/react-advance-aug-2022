import React, { useState } from "react";

const ErrorExample = () => {
  const [text, setText] = useState("Coding is a Game");

  const handleClick = () => {
    if (text === "Coding is a Game") {
      setText("Game is Easy");
    } else {
      setText("Coding is a Game");
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default ErrorExample;
