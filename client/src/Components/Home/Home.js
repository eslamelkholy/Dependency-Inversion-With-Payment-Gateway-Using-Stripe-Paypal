import React, { useState } from "react";
import axiosInstance from "../../Api/Axios/AxiosInstance";

const Home = (props) => {
  const [payment, setPayment] = useState({
    price: 0,
  });

  const handleInputChange = (e) => setPayment({ ...payment, [e.target.name]: e.target.value });

  const submitPayment = async (e) => {
    e.preventDefault();
    const result = await axiosInstance.get("/payment");
    console.log(result);
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
