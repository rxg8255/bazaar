import React, { useState, useEffect } from "react";

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

  const rowSelection = {
    onChange: async (selectedRowKeys, selectedRows) => {
      const updatedRows = selectedRows;
      await selectedRows.map(
        (item) => (item["total_price"] = Number(item["mrp_price"]))
      );
      updatedRows.map((item) => (item["count_value"] = 1));
      await updatedRows.map(
        (item) =>
          (item["count"] = (
            <InputNumber
              name="name"
              min={1}
              max={item.available}
              defaultValue={1}
              onChange={(e) => {
                item["count_value"] = e;
                item["total_price"] = e * item.mrp_price;
                props.onData(updatedRows);
              }}
            />
          ))
      );
      await props.onData(selectedRows);
      //   await this.setState({ selectedData: selectedRows });
    },
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.data}
        rowSelection={rowSelection}
      />
    </div>
  );
}

export default Product;
