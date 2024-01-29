import React, { useState, useEffect } from "react";
import { Table } from "antd";

const CartTest = (props) => {
  // Set the initial state from the props
  const [childData, setChildData] = useState(data);

  // Use the useEffect hook to update the state when the props change
  useEffect(() => {
    console.log("CART DATA", this.props.data);
    setChildData(data);
  }, [data]); // Pass the props as a dependency array

  return <div>{childData["name"]}</div>;
};
export default CartTest;
