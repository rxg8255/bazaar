import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import CartTest from "./CartTest";

function App() {
  const [cartData, setCartData] = useState([]);

  const handleData = (data) => {
    setCartData(data);
    console.log(data);
  };

  const addData = (item) => {
    console.log("You added item:", item);
    cartData.push(item);
    setCartData(cartData);
  };

  const delData = (data) => {
    cartData.forEach((c) => {
      if (c === data) {
        c.count += 1;
      }
    });
    setCartData(data);
    console.log(data);
  };

  useEffect(() => {
    // currentUser changed
    console.log("Use Effect in APP");
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
          <Product cartData={cartData} onData={addData} />
        </Col>
        <Divider type="vertical" />
        {/* <Col span={1}></Col> */}
        <Col span={9}>
          {/* <Cart cartListData={cartData} /> */}
          <CartTest data={cartData} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
