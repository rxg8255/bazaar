function AppTest() {
  const [selected, setSelected] = useState(null);

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
