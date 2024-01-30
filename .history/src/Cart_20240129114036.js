import React from "react";
import { Table, Button } from "antd";

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

  // const [cartState, setCartState] = useState(cartListData);
  // useEffect(() => {
  //   console.log("Cart state changed");
  //   setCartState(cartListData);
  // }, [cartListData]);

  const checkOut = (item) => {
    console.log("Bill and set database", cartListData);
  };

  return (
    <div>
      <Table columns={columns} dataSource={cartListData} size="small" />
      <h3>Sub Total: {subTotal}</h3>
      <Button type="primary" onClick={() => checkOut(1)}>
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
