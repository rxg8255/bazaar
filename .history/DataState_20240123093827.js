import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function DataState() {
  const [value, setValue] = useState({ text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Child1 value={value} onChange={handleChange} />
      <Child2 value={value} onChange={handleChange} />
    </>
  );
}
export default DataState;
