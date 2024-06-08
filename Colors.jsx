import Color from "./Color";
import React from "react";

const Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export default Colors;
