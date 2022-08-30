import React, { useState } from "react";

const Object = () => {
  const [person, setPerson] = useState({
    name: "Ravi",
    age: 31,
    message: "Random Message",
  });
  //   console.log("person Object", person);
  const handleChangeBtn = () => {
    // here we used spread operation because we want to change only message, not name and age. so spread operator will keep other data as it is and only changes new changed data it received.

    setPerson({ ...person, message: "Special Message" });
  };
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={handleChangeBtn}>
        Change Message
      </button>
    </div>
  );
};

export default Object;
