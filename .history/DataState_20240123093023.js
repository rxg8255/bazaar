import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function DataState({ value, onChange }) {
  const [state, setState] = useState({ text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Child1 value={state.text} onChange={handleChange} />
      <Child2 value={state.text} onChange={handleChange} />
    </>
  );
}
export default DataState;
