import React, { useEffect, useState } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1>Window</h1>
      <h2>Size : {size} pixels </h2>
    </div>
  );
};

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </div>
  );
};

export default ShowHide;
