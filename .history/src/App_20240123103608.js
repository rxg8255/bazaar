import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useEffect, useState } from "react";

function App() {
  const [cartData, setCartData] = useState(null);
  const newData = null;

  const handleData = (data) => {
    newData = data;
    console.log(data);
  };

  useEffect(() => {
    setCartData(cartData);
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
          <Product cartData={cartData} onData={handleData} />
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
