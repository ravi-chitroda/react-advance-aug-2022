import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  //   console.log("size", size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect counter");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("useEffect Clean up");
      window.removeEventListener("resize", checkSize); //every rendering useEffect and function call, so here we removing the event listener for that
    };
  }, []);
  //we can also write as only dependancy array [], but whenever we add any event Listener we must practice to remove it with removeEventListener, it will help to less size of the app and also give good response of app.
  console.log("render");

  return (
    <div>
      <h2>UseEffectCleanUp</h2>
      <h3>window</h3>
      <h4>{size} Px</h4>
    </div>
  );
};

export default UseEffectCleanUp;
