import { useState } from "react";
import Clock from "./Clock";
import LanguageContext from "./LanguageContext";
import "./App.scss";

function App() {
  const [language, setLanguage] = useState("it");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="es">Espanol</option>
        <option value="fr">Francais</option>
      </select>
      <hr />
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
