import React, { useState, useEffect, useRef } from "react";
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

  const [cartState, setCartState] = useState();
  const prevRef = useRef();

  const [childData, setChildData] = useState(props.cartData);
  useEffect(() => {
    prevRef.current = cartState;
    setChildData(props.cartData);
  }, [props.cartData]);

  const prev = prevRef.current;

  //   const [count, setCount] = useState(0);
  //   const [total, setTotal] = useState(0);

  return (
    <div>
      <Table columns={columns} dataSource={childData} size="small" />
      <h3>Sub Total: 123.00</h3>
    </div>
  );
}

export default Cart;
