import logo from "./logo.svg";
import "./App.css";
import HeadBar from "./Components/HeadBar/HeadBar";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Summary from "./Components/Summary/Summary";
import ButtonBottom from "./Components/ButtonBottom/ButtonBottom";
import RazorpayComponent from "./Components/RazorPay/RazorpayComponent";

import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <HeadBar />
      <OrderDetails />
      <Summary />
      <RazorpayComponent successPay={openModal} />
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
