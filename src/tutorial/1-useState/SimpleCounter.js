import React, { useState } from "react";

const SimpleCounter = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };
  const handleDecrease = () => {
    if (value !== 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };

  const handleComplex = () => {
    setTimeout(() => {
      //   setValue(value + 1);  // this will gives only value + 1 however we clicked multiple times
      setValue((prevState) => {
        return prevState + 1; // this will give result how many times we clicked on button, so it gives output as every state changed although 2 seconds done or not done.
      });
    }, 2000);
  };

  return (
    <div>
      <h2>Simple Counter</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <h2>More Complex Counter</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={handleComplex}>
        Complex Increase
      </button>
    </div>
  );
};

export default SimpleCounter;
