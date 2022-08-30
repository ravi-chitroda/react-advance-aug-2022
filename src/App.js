import React from "react";
import ArrayExample from "./tutorial/1-useState/ArrayExample";
import ErrorExample from "./tutorial/1-useState/ErrorExample";
import Object from "./tutorial/1-useState/Object";
import SimpleCounter from "./tutorial/1-useState/SimpleCounter";

function App() {
  return (
    <div className="container">
      <ErrorExample />
      <ArrayExample />
      <Object />
      <SimpleCounter />
    </div>
  );
}

export default App;
