import { useState } from "react";

import "./App.css";
import { Welcome } from "./Welcome";
import { person } from "./Welcome";

function App() {
  return <Welcome {...person} />;
}

export default App;
