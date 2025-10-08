import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // access DOM element directly
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
