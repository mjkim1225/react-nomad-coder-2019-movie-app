function Food ({name}) {
  return (
    <h3>i love {name}</h3>
  )
}

function App() {
  return (
    <div className="App">
      Hello!
      <Food name="kimchi" />
      <Food name="potato"/>
    </div>
  );
}

export default App;
