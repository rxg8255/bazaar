// Parent component
import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  // Create a state to store the items
  const [items, setItems] = useState([]);

  // Create a state to store the buttons
  const [buttons, setButtons] = useState([]);

  // Create a function to update the items state
  const setItemsToChild = (item) => {
    setItems([...items, item]);
  };

  // Create a function to add a new button to the buttons state
  const addNewButton = () => {
    // Assume this is the data you want to pass to the child component
    const data = {
      id: Math.random(),
      name: "Pear",
      price: 1.29,
    };
    // Add the data to the buttons state
    setButtons([...buttons, data]);
  };

  return (
    <div>
      <Child items={items} />
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setItemsToChild(button)}
          >{`Add ${button.name}`}</button>
        ))}
      </div>
      <button onClick={addNewButton}>Add New Button</button>
    </div>
  );
}
