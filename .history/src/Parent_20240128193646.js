import React, { useState, useEffect } from "react";

const Parent = () => {
  // Declare a state variable and a setter function
  const [data, setData] = useState(null);

  // A function to update the data
  const updateData = () => {
    // Fetch some data from an API or other source
    fetchData().then((data) => setData(data));
  };

  return (
    <div>
      <button onClick={updateData}>Update data</button>
      // Pass the data as a prop to the child component
      <Child data={data} />
    </div>
  );
};
