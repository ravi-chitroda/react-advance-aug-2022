import React from "react";
import ArrayExample from "./tutorial/1-useState/ArrayExample";
import ErrorExample from "./tutorial/1-useState/ErrorExample";
import Object from "./tutorial/1-useState/Object";
import SimpleCounter from "./tutorial/1-useState/SimpleCounter";
import UseEffectBasic from "./tutorial/2-useEffect/UseEffectBasic";
import UseEffectCleanUp from "./tutorial/2-useEffect/UseEffectCleanUp";
import UseEffectFetch from "./tutorial/2-useEffect/UseEffectFetch";
import UseRef from "./tutorial/4-useRef/UseRef";
import MultipleReturn from "./tutorial/3-Conditional Rendering/MultipleReturn";
import ShortCircuit from "./tutorial/3-Conditional Rendering/ShortCircuit";
import ShowHide from "./tutorial/3-Conditional Rendering/ShowHide";
// import Setup from "./tutorial/5-useReducer/setup";
import PropDrilling from "./tutorial/6-prop_Drilling/PropDrilling";
import UseContextAPI from "./tutorial/7-useContext/UseContextAPI";
import FetchExample from "./tutorial/8-customHooks/FetchExample";
import Setup from "./tutorial/9-prop-types/setup";
import Memo from "./tutorial/10-memo/Memo";
import UseCallback from "./tutorial/10-memo/UseCallback";
import Navbar from "./redux/components/Navbar";
import CartContainer from "./redux/components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./redux/feature/cart/CartSlice";
import Modal from "./redux/components/Modal";

function App() {
  const { cartItem, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {/* <ErrorExample />
      <ArrayExample />
      <Object />
      <SimpleCounter /> */}
      {/* <UseEffectBasic />
      <UseEffectCleanUp />
      <UseEffectFetch /> */}
      {/* <MultipleReturn />
      <ShortCircuit />
      <ShowHide /> */}
      {/* <UseRef /> */}
      {/* <Setup /> */}
      {/* <PropDrilling /> */}
      {/* <UseContextAPI /> */}
      {/* <FetchExample /> */}
      {/* <Setup /> */}
      {/* <Memo /> */}
      {/* <UseCallback /> */}
      {/* <h2>Redux Toolkit</h2> */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
