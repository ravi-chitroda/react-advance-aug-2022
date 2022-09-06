import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;