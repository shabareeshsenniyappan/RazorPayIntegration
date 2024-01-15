import React from "react";
import "./style.css";

function ButtonBottom({ name }) {
  return (
    <div>
      <button className="button-dark">{name}</button>
    </div>
  );
}

export default ButtonBottom;
