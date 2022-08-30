import React from "react";
import ArrayExample from "./tutorial/1-useState/ArrayExample";
import ErrorExample from "./tutorial/1-useState/ErrorExample";
import Object from "./tutorial/1-useState/Object";

function App() {
  return (
    <div className="container">
      <ErrorExample />
      <ArrayExample />
      <Object />
    </div>
  );
}

export default App;
