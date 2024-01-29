import React, { useState, useEffect } from "react";
import { Table } from "antd";

const CartTest = ({ data }) => {
  // Set the initial state from the props
  const [childData, setChildData] = useState(data);

  // Use the useEffect hook to update the state when the props change
  useEffect(() => {
    setChildData(data);
  }, [data]); // Pass the props as a dependency array

  return <div>{childData}</div>;
};
export default CartTest;
