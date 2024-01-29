function AppTest() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // Get the input value from the event object
    const value = event.target.value;
    // Update the state with the input value
    setValue(value);
  };

  return (
    <div>
      <p>Enter some text:</p>
      // Use the onChange event handler and the value attribute
      <input
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
      />
      <p>You entered: {this.state.value}</p>
    </div>
  );
}

export default AppTest;
