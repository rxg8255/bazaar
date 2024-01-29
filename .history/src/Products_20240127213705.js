import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableRow } from "antd";

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
  ];
  const [data, setData] = useState([]);

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

  const handleRowClick = (item) => {
    console.log(item);
  };

  return (
    <div>
      <Table columns={columns}>
        {data.map((item) => (
          <tr key={item.id} item={item} onClick={handleRowClick}>
            <td>Hi</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default Product;
