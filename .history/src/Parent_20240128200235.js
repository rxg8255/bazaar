import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Assume this function gets the new data from somewhere
  const updateData = () => {
    const newData = "Hello, world!";
    setInputValue(newData);
  };

  return (
    <form>
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
      <button onClick={updateData}>Update Data</button>
    </form>
  );
};
export default Parent;
