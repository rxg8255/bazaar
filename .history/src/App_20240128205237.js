import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState } from "react";
import Parent from "./Parent";

function App() {
  const [cartData, setCartData] = useState([]);
  const [items, setItems] = useState([]);

  const addData = (item) => {
    console.log("You added item:", item);
    cartData.push(item);
    setCartData(cartData);
    setItems([...items, item]);
    console.log("Cart data after adding item", cartData);
    // setCartTempData(cartData);
  };

  // useEffect(() => {
  //   debugger;
  //   console.log("Cart data is updated");
  // }, [tempData]);

  return (
    <div className="container">
      <Parent />
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
          <Cart cartListData={cartData} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
