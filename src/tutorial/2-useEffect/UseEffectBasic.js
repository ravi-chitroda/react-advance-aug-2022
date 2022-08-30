import React, { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // if condition can be inside the useEffect but useEffect hook can not be inside the If or any conditional statement
    console.log("useEffect function call");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  });
  console.log("Render Component");
  return (
    <div>
      <h3>useEffect Hook</h3>
      <h4>{value}</h4>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UseEffectBasic;
