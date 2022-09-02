import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

//here we will learn that what is any url you are fetching has some mistakenly missing some data. like here in this url last product has missing price and image.
//in this case your data will be show blank after rendering.
//also image in url also itself has a url property. so for this if url doesn't available and we try to fetch it than we will get definitely error of "undefined"

//for this cases we have to comment out data and than see the props we have passed with console log
const Product = ({ image, name, price }) => {
  //   console.log(image, name, price);
  const url = image && image.url; //resolving issue of image was not display that if url exist than use imageUrl otherwise use default image
  return (
    <div className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>$ : {price || 3.99}</p>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
};

export default Product;
