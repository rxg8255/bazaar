import React, { useState, useEffect, useRef } from "react";
import { Table } from "antd";

function Cart(cartListData) {
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

  const [cartState, setCartState] = useState(cartListData);
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = cartState;
  });

  const prev = prevRef.current;

  useEffect(() => {
    // Compare the previous state with the current state
    if (prev !== cartState) {
      // Perform some changes based on the state change
      console.log("State changed from", prev, "to", cartState);
      // Optionally, you can update the state again to trigger a re-render
      setCartState(cartState);
    }
  }, [cartState, prev]); // Pass the state and prev as dependencies

  //   const [count, setCount] = useState(0);
  //   const [total, setTotal] = useState(0);

  return (
    <div>
      <Table columns={columns} dataSource={} size="small" />
      <h3>Sub Total: 123.00</h3>
    </div>
  );
}

export default Cart;
