import React from "react";
import Child from "./Child";

const Parent = () => {
  const x = 2;
  let str = "seif";
  let test = true;
  let array = [
    { name: "prod1", price: 10 },
    { name: "prod2", price: 20 },
    { name: "prod3", price: 30 },
    { name: "prod4", price: 40 },
  ];
  return (
    <div>
      <Child y={x} str={str} test={test} array={array} />
    </div>
  );
};

export default Parent;
