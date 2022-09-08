import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";
import { reducer } from "./Reducer";

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
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      // dispatch({ type: "RANDOM" }); //To show error throw in reducer, RANDOM is not any value
      dispatch({ type: "NO_VALUE" });
    }
  };

  //To close modal after some time use this function dispatch type and value to reducer, than reducer will take action which is isModalOpen:false than we pass this function to Modal.js as a prop
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Day
        </button>
      </form>
      {state.days.map((day) => {
        return (
          <div key={day.id} className="item">
            <h4>{day.name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: day.id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
