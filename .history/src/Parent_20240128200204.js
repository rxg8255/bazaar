import React, { useState } from "react";
import Child from "./Child";
import axios from "axios";

const Parent = () => {
  // Declare a state variable and a setter function
  const [data, setData] = useState(null);

  // A function to update the data
  const updateData = () => {
    const fetchData = async () => {
      // Try to get the data from the API endpoint
      try {
        // Use axios.get to make a GET request with the URL
        const response = await axios.get(
          "http://127.0.0.1:8000/api/inventory/"
        );
        // Set the data state with the response data
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch some data from an API or other source
    fetchData().then((data) => setData(data));
  };

  return (
    <div>
      <button onClick={updateData}>
        Update data
        <Child data={data} />
      </button>
    </div>
  );
};
export default Parent;
