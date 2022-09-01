//action = type : "TESTING" it will always in object form.  type is property, TESTING is value
//dispatch = function which is pass action which is in object to the state.
//so now, type property which has testing value("action") is catch by reducer with dispatch, that means we are not directly affecting state. reducer is done all things.

export const reducer = (state, action) => {
  // console.log("state", state);
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
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newDay = state.days.filter((day) => day.id !== action.payload);
    return { ...state, days: newDay };
  }

  throw new Error("Not matching action type");
};
