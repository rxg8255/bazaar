import React from "react";

export default function Child({ inputValue, onInputChange }) {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <p>{inputValue}</p>
    </div>
  );
}
