import React, { useState, useRef } from "react";
import { Button, Modal, Table } from "antd";
import { useReactToPrint } from "react-to-print";

const Receipt = ({ cartData, subTotal }) => {
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   window.print();
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Checkout
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handlePrint}
        onCancel={handleCancel}
        okText="Print"
      >
        <div ref={componentRef}>
          <h2>Bazaar Receipt</h2>
          <Table
            columns={columns}
            dataSource={cartData}
            size="small"
            pagination={false}
          />
          <h3 text-align="right">Sub Total: {subTotal}</h3>
        </div>
      </Modal>
    </>
  );
};
export default Receipt;
