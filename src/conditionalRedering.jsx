import React, { useState } from "react";

// Dummy components
function Loading() {
  return <h2>Loading...</h2>;
}

function Success() {
  return <h2>Data Loaded Successfully!</h2>;
}

function Error() {
  return <h2>Error Loading Data!</h2>;
}

// Main component
function App() {
  const [status, setStatus] = useState("loading"); // can be 'loading', 'success', or 'error'

  // Function to render based on status
  const renderContent = () => {
    switch (status) {
      case "loading":
        return <Loading />;
      case "success":
        return <Success />;
      default:
        return <Error />;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {renderContent()}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setStatus("loading")}>Loading</button>
        <button onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("error")}>Error</button>
      </div>
    </div>
  );
}

export default App;
