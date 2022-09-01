import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import Modal from "./Modal";

//action = type : "TESTING" it will always in object form.  type is property, TESTING is value
//dispatch = function which is pass action which is in object to the state.
//so now, type property which has testing value("action") is catch by reducer with dispatch, that means we are not directly affecting state. reducer is done all things.

const reducer = (state, action) => {
  console.log("state", state);
  if (action.type === "ADD_ITEM") {
    const newDays = [...state.days, action.payload];
    return {
      ...state,
      isModalOpen: true,
      days: newDays,
      modalContent: "item added",
    };
  }
  // console.log(state, action);
  // return state; // reducer always need to return state/////otherwise it will get error... above we return state
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please Enter Value" };
  }

  throw new Error("Not matching action type");
};

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
          Add Day
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
