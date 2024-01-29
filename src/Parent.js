// Parent component
import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  // Create a state to store the items
  const [items, setItems] = useState([]);

  // Create a function to update the items state
  const setItemsToChild = (item) => {
    setItems([...items, item]);
  };

  // Create constants to store the data for the two buttons
  const button1 = {
    id: 1,
    name: "Apple",
    price: 1.99,
  };

  const button2 = {
    id: 2,
    name: "Banana",
    price: 0.99,
  };

  return (
    <div>
      <Child items={items} />
      <div className="buttons">
        {/* Pass the data and the name for each button as props */}
        <button
          onClick={() => setItemsToChild(button1)}
        >{`Add ${button1.name}`}</button>
        <button
          onClick={() => setItemsToChild(button2)}
        >{`Add ${button2.name}`}</button>
      </div>
    </div>
  );
}
