import React, { useState } from "react";
import { data } from "../../data";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>Single Item</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <div>
      <h2>PropDrilling page</h2>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

export default PropDrilling;
