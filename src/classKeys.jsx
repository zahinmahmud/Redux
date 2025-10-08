import React, { Component } from "react";

class App extends Component {
  state = {
    fruits: ["Apple", "Banana", "Cherry", "Date"]
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Fruits List</h2>
        <ul>
          {this.state.fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
