import React, { useState } from "react";

const Home = (props) => {
  const [payment, setPayment] = useState({
    price: 0,
  });

  const handleInputChange = (e) => setPayment({ ...payment, [e.target.name]: e.target.value });

  const submitPayment = (e) => {
    e.preventDefault();
    console.log(payment);
  };
  return (
    <div>
      <h1>Hello This Demo For Online Payment</h1>
      <form onSubmit={submitPayment}>
        <label>
          Price:
          <input name="price" type="number" value={payment.price} onChange={handleInputChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
