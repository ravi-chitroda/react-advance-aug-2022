import React, { useCallback, useState } from "react";
import { UseFetch } from "../8-customHooks/UseFetch";

//every time props or state changes, components also Re-render

//now, when we add and pass another state as a prop then again we are facing same issue of Re-render.
//Here we add another state called cart
//now whenever we click on add to Cart button or count button we facing same issue of rendering , all the function re-render again and again
//because value of cart state is changed so function change and again all components re render
//so its solution is useCallback.
//useCallback deal with function, where memo was deal with component.
//useCallback wrap the addToCart function, also it has dependency array [cart].

//now here we get warning that "React hook useEffect has a missing dependency : getProducts", this will be clear by useMemo.

const url = "https://course-api.com/javascript-store-products";

const UseCallback = () => {
  const { products } = UseFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    console.log("cart", cart);
    //this function will be pass through all the components
    setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>

      <BigList products={products} addToCart={addToCart} />
    </div>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  console.log("Big List is called");
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  console.log("single Product is called");
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>$ : {price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};

export default UseCallback;
