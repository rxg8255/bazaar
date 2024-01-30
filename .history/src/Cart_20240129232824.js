import React from "react";
import { Table } from "antd";
import Receipt from "./Receipt";

function Cart({ cartListData, subTotal }) {
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

  return (
    <div>
      <Table
        columns={columns}
        dataSource={cartListData}
        size="small"
        pagination={false}
      />
      <h3>Sub Total: {subTotal}</h3>
      <Receipt cartData={cartListData} subTotal={subTotal} />
    </div>
  );
}

export default Cart;
