import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputNumber, Button } from "antd";

function Product(props) {
  const columns = [
    {
      title: "Id",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "ML",
      dataIndex: "quantity",
    },
    {
      title: "Qty",
      dataIndex: "available",
    },
    {
      title: "MRP",
      dataIndex: "mrp_price",
    },
    {
      title: "Action",
      key: "action",
      // Use the render function to return a button element
      render: (text, record, index) => (
        <Button
          // Use the onClick prop to pass the record to a handler function
          onClick={() => handleButtonClick(record)}
        >
          Click Me
        </Button>
      ),
    },
  ];
  const [data, setData] = useState([]);

  const handleButtonClick = (record) => {
    // You can access the record here
    console.log("You clicked the button with data", record);
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
  }, []);

  return (
    <div>
      {/* <Table columns={columns} dataSource={data} /> */}
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Product;
