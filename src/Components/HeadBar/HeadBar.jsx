import React from "react";
import "./style.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function HeadBar() {
  return (
    <div className="head-bar-hero-container">
      <article className="heding-dark">TSX PizzEriAs</article>
      <section className="toogle-bar">
        <ToggleSwitch />
      </section>
      <section className="header-prod-info">
        <span>25 mins</span>
        <span>₹ 20</span>
        <span>Discounts</span>{" "}
      </section>
      <section className="header-timing-info">
        Menu Hours: 10:00 AM to 11:00 PM
      </section>
    </div>
  );
}

export default HeadBar;
