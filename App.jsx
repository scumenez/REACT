import { useState } from "react";

import "./App.css";

function App() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };

  return (
    <button name="Click Me" onClick={handleButtonClick}>
      <img
        src="https://picsum.photos/200/300"
        width="200"
        onClick={handleImageClick}
        style={{ pointerEvents: "all" }}
      />
      Click Me
    </button>
  );
}

export default App;
