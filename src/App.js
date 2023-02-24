function App(props) {
  return (
    <ul>
      {props.listFruit.map((value) => (
        <li>{value}</li>
      ))}
    </ul>
  );
}

export default App;
