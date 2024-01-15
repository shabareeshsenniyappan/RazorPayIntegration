import React from "react";
import "./style.css";

function OrderDetails() {
  const orders = [
    {
      id: 1,
      quantity: 2,
      title: "Margarita A",
      helper: "crab & cucumber",
      price: 142.0,
    },
    {
      id: 2,
      quantity: 1,
      title: "Margarita B",
      helper: "tuna & cucumber",
      price: 112.0,
    },
    {
      id: 3,
      quantity: 3,
      title: "Margarita C",
      helper:
        "smoked salmon over rice with extra sauce to check if this line works",
      price: 1236.0,
    },
  ];
  return (
    <div className="order-hero-container">
      <div className="head-container">
        {" "}
        <div className="heading-1">Your Order</div>
        <div className="pink-txt">Add items +</div>
      </div>
      {orders?.map((order) => (
        <div className="detail-container" key={order.id}>
          <div className="deliver-order">
            <div className="quantity-note">{order?.quantity}</div>
            <div className="detail-hero">
              <div className="title-txt">{order?.title}</div>
              <div className="helper-txt">{order?.helper}</div>
            </div>
          </div>
          <div className="price-details">₹{order?.price + ".00"}</div>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
