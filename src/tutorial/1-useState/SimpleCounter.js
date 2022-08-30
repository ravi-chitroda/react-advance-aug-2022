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
    </div>
  );
};

export default SimpleCounter;
