import React from "react";

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // key helps React track items
        ))}
      </ul>
    </div>
  );
}

export default App;
