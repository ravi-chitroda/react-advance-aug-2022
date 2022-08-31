import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "I am First";
  const secondValue = text && "I am Second";

  return (
    <div>
      <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1>
      <h1>{text || "ravi Chitroda"}</h1>
      {!text && <h1>Asha</h1>}
    </div>
  );
};

export default ShortCircuit;
