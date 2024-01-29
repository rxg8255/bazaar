import React, { useState, useEffect, useRef } from "react";
import { Table } from "antd";

function Cart({ cartListData }) {
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
  useEffect(() => {
    }
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={cartState.cartData} size="small" />
      <h3>Sub Total: 123.00</h3>
    </div>
  );
}

export default Cart;
