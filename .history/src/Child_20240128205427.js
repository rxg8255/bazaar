// Child component
import React from "react";

export default function Child({ items }) {
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
