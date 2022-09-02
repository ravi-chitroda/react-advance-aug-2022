import React from "react";
import Product from "./Product";
import { UseFetch } from "../../8-customHooks/UseFetch";
import defaultImage from "../../../assets/default-image.jpeg";

//here we will learn that what is any url you are fetching has some mistakenly missing some data. like here in this url last product has missing price and image.
//in this case your data will be show blank after rendering.
//also image in url also itself has a url property. so for this if url doesn't available and we try to fetch it than we will get definitely error of "undefined"

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = UseFetch(url);
  return (
    <div>
      {/* <img src={defaultImage} /> */}
      <h4>Products</h4>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
