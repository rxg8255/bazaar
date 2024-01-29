import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);

  const handleData = (data) => {
    setCartData(data);
    console.log(data);
  };

  const addData = (item) => {
    cartData.push(item);
    setCartData(cartData);
    // cartData.forEach((c) => {
    //   if (c === item) {
    //     c.count += 1;
    //   }
    // });
    // setCartData(data);
    // console.log(data);
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
          <Cart cartData={cartData} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
