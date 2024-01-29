import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [cartTempData, setCartTempData] = useState([]);

  const addData = (item) => {
    console.log("You added item:", item);
    cartData.push(item);
    setCartData(cartData);
    console.log("Cart data after adding item", cartData);
  };

  useEffect(() => {
    console.log("Cart data is updated");
    setCartTempData(cartData);
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
