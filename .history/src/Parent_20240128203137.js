// Parent component
import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  // Create a state to store the items
  const [items, setItems] = useState([]);

  // Create a function to update the items state
  const setItemsToChild = () => {
    // Assume this is the data you want to pass to the child component
    const data = [
      { id: 1, name: "Apple", price: 1.99 },
      { id: 2, name: "Banana", price: 0.99 },
      { id: 3, name: "Orange", price: 1.49 },
    ];
    // Update the items state with the data
    setItems(data);
  };

  return (
    <div>
      <Child items={items} />
      <button onClick={setItemsToChild}>Set Items</button>
    </div>
  );
}
