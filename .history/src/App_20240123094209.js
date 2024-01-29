import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState } from "react";
import DataState from "./DataState";

function App() {
  // const [cartData, setCartData] = useState(null);

  // const handleData = (data) => {
  //   setCartData(data);
  //   console.log(data);
  // };

  return (
    <div>
      <DataState />
    </div>
    // <div className="container">
    //   <Row>
    //     <Col span={24}>
    //       <h1>Bazaar</h1>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={14}>
    //       <Product cartData={cartData} onData={handleData} />
    //     </Col>
    //     <Divider type="vertical" />
    //     {/* <Col span={1}></Col> */}
    //     <Col span={9}>
    //       <Cart cartData={cartData} onData={handleData} />
    //     </Col>
    //   </Row>
    //   <footer>
    //     <small>made by Ranjith Reddy</small>
    //   </footer>
    // </div>
  );
}

export default App;
