import React from "react";

const Button = ({ color, changeColor }) => {
  return (
    <button
      onClick={() => {
        changeColor(color)
      }}
      style={{
        backgroundColor: color,
        padding: "10px",
      }}
    >
      {color.toUpperCase()}
    </button>
  );
};

export default Button;
