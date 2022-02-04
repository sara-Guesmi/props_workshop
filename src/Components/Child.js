import React from "react";

const Child = ({ str, y, test, array }) => {
  //   props is an object
  // props={
  // y:2,str:"khouloud"
  // }
  //   const { y, str } = props;
  //   props.str = "hayenne";
  // Props is to read Onlyyyyyyy!!!!!!!

  return (
    <div>
      <h2>{test ? str : "there is no name"}</h2>
      <h2>Si {y}</h2>
      {/* ************ */}
      {array.map((el, i) => (
        <div>{el.name}</div>
      ))}
      <hr />
    </div>
  );
};

export default Child;
