import React, { useEffect } from "react";

const Child = ({ data }) => {
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div>{data ? <p data={data} /> : <p>Loading...</p>}</div>;
};
export default Child;
