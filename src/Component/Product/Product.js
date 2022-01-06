import React from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
const Product = ({ product, handleName }) => {
  return (
    <div id="container">
      {/* Start	Product details */}
      <div className="product-details">
        {/* 	Product Nam e */}
        <h1>{product.title}</h1>
        <Button
          variant="outlined"
          onClick={() => handleName(product.title, product.price)}
        >
          Click To know Price:
        </Button>
        <Rating
          name="text-feedback"
          value={product.rating.rate}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {/* The most important information about the product */}
        <p className="information">{product.description}</p>
        {/* 		Control */}
      </div>

      <div className="product-image">
        <img src={product.image} alt={product.title} />
        {/* 	product Information*/}
      </div>
      {/*  End product image  */}
    </div>
  );
};

export default Product;
