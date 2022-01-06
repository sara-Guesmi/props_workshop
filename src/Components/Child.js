import React from "react";
import Children from "./children";

const Child = ({ str, y, test, array }) => {
  //   props is an object
  // props={
  // y:2,str:"seif"
  // }
  //   const { y, str } = props;
  //   props.str = "hayenne";
  // Props is to read Onlyyyyyyy!!!!!!!
  //   let str = "zied";
  return (
    <div>
      <h2>{test ? str : "there is no name"}</h2>
      <h2>Si {y}</h2>
      {/* ************ */}
      {array.map((el, i) => (
        <Children el={el} key={i} />
      ))}
      <hr />
      {array
        .filter((el) => el.price > 20)
        .map((el, i) => (
          <Children el={el} key={i} />
        ))}
    </div>
  );
};

export default Child;
