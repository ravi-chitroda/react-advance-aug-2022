import React, { useState } from "react";
import { UseFetch } from "../8-customHooks/UseFetch";

//every time props or state changes, components also Re-render

//so while using memo function and component inside it, react checks that is products is same or changed???
//if product is same and not changed than react says that there is no need to re-render of that component.
//here before used memo, BigList was re render every time when we update the status of count this cause the performance of app.

const url = "https://course-api.com/javascript-store-products";

const Memo = () => {
  const { products } = UseFetch(url);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        CLick Me
      </button>

      <BigList products={products} />
    </div>
  );
};

const BigList = React.memo(({ products }) => {
  console.log("Big List is called");
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} />;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  console.log("single Product is called");
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>$ : {price}</p>
    </article>
  );
};

export default Memo;
