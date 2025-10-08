import React, { useState } from "react";

// Dummy components
function Active() {
  return <h2 style={{ color: "green" }}>The status is Active!</h2>;
}

function Inactive() {
  return <h2 style={{ color: "red" }}>The status is Inactive!</h2>;
}

// Main component
function App() {
  const [isActive, setIsActive] = useState(true);

  // Conditional element
  const element = isActive ? <Active /> : <Inactive />;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {element}
      <button
        style={{ marginTop: "20px" }}
        onClick={() => setIsActive(!isActive)}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default App;
