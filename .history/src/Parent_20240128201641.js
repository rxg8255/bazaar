import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
    </form>
  );
};
export default Parent;
