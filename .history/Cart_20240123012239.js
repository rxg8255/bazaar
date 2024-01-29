import React, { useState, useEffect } from "react";

function Cart() {
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

  useEffect(() => {}, []);

  return "";
}

export default Cart;
