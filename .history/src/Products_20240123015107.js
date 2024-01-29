import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputNumber } from "antd";

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
  const [data, setData] = useState(null);

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

  const rowSelection = {
    onChange: async (selectedRowKeys, selectedRows) => {
      const updatedRows = await Promise.all(
        selectedRows.map((item) => {
          return new Promise((resolve) => {
            const updatedItem = { ...item };
            updatedItem["total_price"] = Number(item["mrp_price"]);
            updatedItem["count_value"] = 1;
            updatedItem["count"] = (
              <InputNumber
                name="name"
                min={1}
                max={item.available}
                defaultValue={1}
                onChange={(e) => {
                  updatedItem["count_value"] = e;
                }}
              />
            );
            resolve(updatedItem);
          });
        })
      );

      this.setState({
        selectedRows: updatedRows,
        // changeData: updatedRows[0]["count_value"] * updatedRows[0]["mrp_price"],
        // changeKey: updatedRows[0]["key"],
      });
      //   await props.onData(selectedRows);
      //   console.log(selectedRows);
      //   await this.setState({ selectedData: selectedRows });
    },
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
    </div>
  );
}

export default Product;
