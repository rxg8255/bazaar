import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
const Receipt = ({ cartData }) => {
  const columns = [
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Checkout
      </Button>
      <Modal
        title="Bazaar Receipt"
        open={isModalOpen}
        onPrint={handleOk}
        onCancel={handleCancel}
      >
        <Table
          columns={columns}
          dataSource={cartData}
          size="small"
          pagination={false}
        />
      </Modal>
    </>
  );
};
export default Receipt;
