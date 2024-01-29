import Cart from "./Cart";
import "./App.css";
import Product from "./Products";
import { Row, Col, Divider } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const handleData = (data) => {
    setData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Try to get the data from the API endpoint
      try {
        // Use axios.get to make a GET request with the URL
        const response = await axios.get(
          "http://127.0.0.1:8000/api/inventory/"
        );
        // Set the data state with the response data
        setData(response.data);
      } catch (error) {
        // Handle the error if any
        console.error(error);
      }
    };
    // Call the async function
    fetchData();
  }, [data]);
  const [cartData, setCartData] = useState(null);

  const handleCartData = (data) => {
    setCartData(data);
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
          <Product
            data={data}
            onProducts={handleData}
            cartData={cartData}
            onData={handleCartData}
          />
        </Col>
        <Divider type="vertical" />
        {/* <Col span={1}></Col> */}
        <Col span={9}>
          <Cart cartData={cartData} onData={handleCartData} />
        </Col>
      </Row>
      <footer>
        <small>made by Ranjith Reddy</small>
      </footer>
    </div>
  );
}

export default App;
