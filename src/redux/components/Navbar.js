import React from "react";
import { CartIcon, cartIcon } from "../icons";
import { useSelector } from "react-redux";
// import { store } from "../store";

const Navbar = () => {
  //   console.log(
  //     useSelector(() => {
  //       console.log(store);
  //     })
  //   );
  //   const amount = useSelector((store) => store.cart.amount);  //or we can write as below
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
