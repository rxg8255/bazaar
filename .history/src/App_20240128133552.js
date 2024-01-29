import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [cartTempData, setCartTempData] = useState([]);

  // START TEMP

  const prevRef = useRef();
  const [cartState, setCartState] = useState(cartData);
  useEffect(() => {
    setCartState(cartData);
    prevRef.current = cartState;
  }, [cartData, cartState]);

  const prev = prevRef.current;

  useEffect(() => {
    // Compare the previous state with the current state
    if (prev !== cartState) {
      // Perform some changes based on the state change
      console.log("State changed from", prev, "to", cartState);
      // Optionally, you can update the state again to trigger a re-render
      setCartState(cartState);
    }
  }, [cartState, prev]); // Pass the state and prev as dependencies

  // END TEMP

  const addData = (item) => {
    console.log("You added item:", item);
    cartData.push(item);
    setCartData(cartData);
    console.log("Cart data after adding item", cartData);
    setCartTempData(cartData);
  };

  useEffect(() => {
    console.log("Cart data is updated");
  }, [cartData]);

  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <h1>Bazaar</h1>
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <Product onData={addData} />
        </Col>
        <Divider type="vertical" />
        {/* <Col span={1}></Col> */}
        <Col span={9}>
          <Cart cartListData={cartTempData} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
