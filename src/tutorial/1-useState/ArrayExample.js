import React from "react";
import { data } from "../../data";

const ArrayExample = () => {
  const [days, setDays] = React.useState(data);

  const removeItem = (id) => {
    let newDay = days.filter((day) => day.id !== id);
    setDays(newDay);
  };

  return (
    <div>
      {days.map((day) => {
        const { id, name } = day;
        // console.log(day);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setDays([])}>
        Clear Data
      </button>
    </div>
  );
};

export default ArrayExample;
