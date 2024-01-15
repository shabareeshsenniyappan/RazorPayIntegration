import React, { useState } from "react";
import "./style.css"; // Import your CSS file

const Modal = ({ closeModal }) => {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div>Order has been placed successfully.</div>
          <div>Confirmation message sent!</div>
          <br />
          <div>
            <b>Order Id:</b> 3267
          </div>
          <br />
          <div>
            <b> Total:</b> ₹ 1058.65
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
