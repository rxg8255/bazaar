// The child component that receives the data as a prop
const Child = ({ data }) => {
  // Use the useEffect hook to do something when the data changes
  useEffect(() => {
    // Check if the data is not null
    if (data) {
      // Do something with the data, such as displaying it or updating the state
      console.log(data);
    }
  }, [data]); // Pass the data as a dependency array

  return (
    <div>
      // Render the data or a loading message
      {data ? <DataDisplay data={data} /> : <p>Loading...</p>}
    </div>
  );
};
