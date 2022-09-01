import React, { useEffect, useRef } from "react";

//preserve Value
//Does not trigger Re-render
//Target DOM node/elements

//If we want to do something specific with DOM node then we will use useRef. Here We don't use state although we will get value from DOM using useRef.

const UseRef = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ref", refContainer.current.value);
  };
  console.log("refContainer", refContainer);
  console.log("divContainer", divContainer.current);

  //there is no use of dependency array while using useEffect and useRef because useRef does not trigger Re-render

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  //focus() means when app is render focus will be on that element

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </div>
  );
};

export default UseRef;
