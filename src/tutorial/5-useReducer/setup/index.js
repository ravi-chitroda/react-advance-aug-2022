import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

const reducer = (state, action) => {};

const defaultState = {
  // isModalOpen: true,
  // days: data,
  // modalContent: "hello World",
  isModalOpen: false,
  days: [],
  modalContent: "",
};

const Index = () => {
  // const [days, setDays] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //this was used when useReducer not used
    // if (name) {
    //   setShowModal(true);
    //   setDays([...days, { id: new Date().getTime().toString(), name }]);
    //   setName("");
    // } else {
    //   setShowModal(true);
    // }

    //now we using useReducer
    if (name) {
    } else {
    }
  };

  return (
    <div>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Person
        </button>
      </form>
      {state.days.map((day) => {
        return (
          <div key={day.id}>
            <h4>{day.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
