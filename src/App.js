import React from "react";
import ArrayExample from "./tutorial/1-useState/ArrayExample";
import ErrorExample from "./tutorial/1-useState/ErrorExample";
import Object from "./tutorial/1-useState/Object";
import SimpleCounter from "./tutorial/1-useState/SimpleCounter";
import UseEffectBasic from "./tutorial/2-useEffect/UseEffectBasic";
import UseEffectCleanUp from "./tutorial/2-useEffect/UseEffectCleanUp";
import UseEffectFetch from "./tutorial/2-useEffect/UseEffectFetch";
import MultipleReturn from "./tutorial/Conditional Rendering/MultipleReturn";

function App() {
  return (
    <div className="container">
      {/* <ErrorExample />
      <ArrayExample />
      <Object />
      <SimpleCounter /> */}

      {/* <UseEffectBasic />
      <UseEffectCleanUp />
      <UseEffectFetch /> */}
      <MultipleReturn />
    </div>
  );
}

export default App;
