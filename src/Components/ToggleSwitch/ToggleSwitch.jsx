import React, { useState } from "react";
import "./style.css";
const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toogle-hero-container">
      <div className="active-toogle">delivery</div>
      <div className="in-active-toogle">pickup</div>
    </div>
  );
};

export default ToggleSwitch;
