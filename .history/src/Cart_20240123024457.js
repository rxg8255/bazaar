import React, { useState, useEffect } from "react";
import { Table } from "antd";

function Cart(props) {
  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      width: 40,
      fixed: "left",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
      fixed: "left",
    },
    {
      title: "ML",
      dataIndex: "quantity",
      width: 80,
      fixed: "left",
    },
    {
      title: "Count",
      dataIndex: "count",
      width: 40,
      fixed: "left",
    },
    {
      title: "MRP",
      dataIndex: "mrp_price",
      width: 40,
      fixed: "left",
    },
    {
      title: "Total",
      dataIndex: "total_price",
      width: 40,
      fixed: "left",
    },
  ];
  const [dummy, setDummy] = useState(null);
  useEffect(() => {}, []);

  //   const [count, setCount] = useState(0);
  //   const [total, setTotal] = useState(0);

  return (
    <div>
      <Table
        // onRow={(record, rowIndex) => {
        //   return {
        //     onClick: (event) => {
        //       setCount(count + 1);
        //       updateStore();
        //     },
        //   };
        // }}
        columns={columns}
        dataSource={props.cartData}
        size="small"
      />
      <h3>Sub Total: 123.00</h3>
    </div>
  );
}

export default Cart;
