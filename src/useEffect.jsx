import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []); // empty dependency → runs once on mount

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;
