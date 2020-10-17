import React from "react";

const Home = (props) => {
  return (
    <div>
      <hr />
      <h2>Help Save the Sasquatch Population</h2>
      <hr />

      <form method="POST" action="/buysingle">
        <h3>Buy Habitat Starter Kit</h3>
        $10.00
        <br />
        Quantity;
        <input type="number" name="Quantity" value="1" style={{ width: "50px" }} class="btn" />
        <input type="submit" value="Purchase" class="btn" />
        <br />
        <p>The starter package comes with everything your adopted Sasquatch needs when living in the wild</p>
        <p>This plan includes:</p>
        <ul>
          <li>1 Monthly Supply of Food</li>
          <li>1 Monthly Supply of Water</li>
          <li>1 Monthly Supply of Grass Bedding</li>
          <li>1 Monthly Supply of Toys</li>
        </ul>
      </form>

      <form method="POST" action="/buyrecurring">
        <h3>Rent Maintained Habitat</h3>
        $10.00 a Month
        <input type="submit" value="Purchase" class="btn" />
        <br />
        <p>The package comes with the Starter Kit and refills supples every month</p>
      </form>
    </div>
  );
};

export default Home;
