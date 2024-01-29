import React from "react";

function Child1({ value, onChange }) {
  return <input type="text" name="text" value={value} onChange={onChange} />;
}

export default Child1;
