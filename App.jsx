import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Welcome } from "./Welcome";
import { person } from "./Welcome";

function App() {
  return <Welcome {...person} />;
}

export default App;
