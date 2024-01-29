import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useState } from "react";
import Parent from "./Parent";

function App() {
  const [items, setItems] = useState([]);

  const addData = (item) => {
    setItems((prevItems) => {
      debugger;
      // Check if the item already exists in the array
      const exists = prevItems.some((prevItem) => prevItem.key === item.key);

      // If it exists, return a new array with the updated count of the item
      if (exists) {
        return prevItems.map((prevItem) => {
          prevItem.key === item.key
            ? { ...prevItem, count: prevItem.count + 1 }
            : prevItem
        );}
      } else {
        item.count = 1;
      }

      // If it does not exist, return a new array with the item added
      return [...prevItems, item];
    });

    console.log("You added item:", item);
    // setItems([...items, item]);
    console.log("Cart data after adding item", items);
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
          <Product onData={addData} />
        </Col>
        <Divider type="vertical" />
        {/* <Col span={1}></Col> */}
        <Col span={9}>
          <Cart cartListData={items} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
