import React from "react";
import "./style.css";
function Summary() {
  return (
    <div className="summary-container">
      <span className="summary-head heading-1">Summary</span>
      <div className="detail-container-1">
        <div className="head-txt-1">Subtotal</div>
        <div className="price-txt-1">₹1760.00</div>
      </div>
      <div className="detail-container-1">
        <div className="head-txt-1">Discount</div>
        <div className="price-txt-2">-₹759.50</div>
      </div>
      <div className="detail-container-1">
        <div className="head-txt-1">Delivery Fee</div>
        <div className="price-txt-1">₹12.00</div>
      </div>
      <div className="detail-container-1">
        <div className="head-txt-1">Taxes</div>
        <div className="price-txt-1">₹46.15</div>
      </div>
      <div className="detail-container-2">
        <div className="dark-txt">Total</div>
        <div className="dark-txt-2">₹ 1058.65</div>
      </div>
    </div>
  );
}

export default Summary;
