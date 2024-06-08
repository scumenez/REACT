/*function App() {
  const names = ["Giul", "Ric", "Andre", "Chiara"];
  const items = names.map((name) => <li>{name}</li>);
  return <ul>{items}</ul>;
}*/

import React from "react";
import Colors from "./Colors";
import "./App.css";

export function App() {
  const colorList = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Giallo" },
    { id: 3, name: "Viola" },
    { id: 4, name: "Blu" },
  ];

  return (
    <div>
      <h1>List</h1>
      <Colors colors={colorList} />
    </div>
  );
}
