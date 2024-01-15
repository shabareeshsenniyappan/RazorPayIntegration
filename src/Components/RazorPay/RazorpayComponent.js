import { useCallback } from "react";
import useRazorpay from "react-razorpay";

const RazorpayComponent = ({ successPay }) => {
  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(async () => {
    const options = {
      payment_capture: 1,
      key: "rzp_test_GaRYfqU9RIzqta",
      amount: "3000",
      currency: "INR",
      name: "ShabareeshAssignment",
      description: "Test Transaction",
      order_id: "order_NOqSzBISWm6YDg",
      handler: (res) => {
        successPay();
      },
      prefill: {
        name: "TechStax_Assignment",
        email: "assignment@techstax.com",
        contact: "9898989898",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button className="button-dark" onClick={handlePayment}>
        Place order
      </button>
    </div>
  );
};

export default RazorpayComponent;
