import React from "react";
import { products } from "../../constants/data";
import Product from "../Product/Product";
const ProductList = () => {
  const handleName = (title, price) => {
    alert(`this ${title} has a price ${price}`);
  };
  return (
    <div>
      <h2 className="title">This is Product List:</h2>
      {products.map((product) => (
        <Product product={product} key={product.id} handleName={handleName} />
      ))}
      <h2 className="title">
        List Of product that their category is Men's clothing and their price
        greater tha 100:{" "}
      </h2>
      {products
        .filter(
          (product) =>
            product.price > 100 && product.category === "men's clothing"
        )
        .map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;
