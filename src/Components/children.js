import React from "react";

const Children = ({ el }) => {
  return (
    <div>
      <h2>{el.name}</h2>
      <h2>{el.price}</h2>
    </div>
  );
};

export default Children;
Children.defaultProps = {
  el: {
    name: "inconnu",
    price: 0,
  },
};
