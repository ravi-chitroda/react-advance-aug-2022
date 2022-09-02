import React, { useEffect, useState } from "react";
import { UseFetch } from "./UseFetch";
// import { useFetch } from "./UseFetch";

///This is normal way to do any code. means here we fetch data from url then get each product from url and than we store products in "products" with setProducts.
// now we will comment out this all fetch and than shift it into UseFetch.js and than with our custom hook called "useFetch" we will get same data. so lets see

const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [products, setProducts] = useState([]);

  //   const getProducts = async () => {
  //     const response = await fetch(url);
  //     const products = await response.json();
  //     setProducts(products);
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     getProducts();
  //   }, [url]);

  //   console.log(products);

  //below data is now imported from UseFetch.js

  const { loading, products } = UseFetch(url);
  return (
    <div>
      <h3>{loading ? "Loading..." : "Products"}</h3>
    </div>
  );
};

export default FetchExample;
