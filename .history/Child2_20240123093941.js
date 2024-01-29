import React from "react";

function Child2({ value, onChange }) {
  return <input type="text" name="text" value={value} onChange={onChange} />;
}

export default Child2;
