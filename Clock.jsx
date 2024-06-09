import { useContext, useState, useEffect } from "react";
import LanguageContext from "./LanguageContext";
import "./Clock.scss";

export default function Clock() {
  const language = useContext(LanguageContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTimeMessage = (l) => {
    switch (l) {
      case "it":
        return "Orario corrente:";
      case "es":
        return "Hora actual:";
      case "fr":
        return "Heure actuelle:";
      case "en":
      default:
        return "Current time:";
    }
  };

  return (
    <div className="clockDate">
      <h2>{getCurrentTimeMessage(language)}</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}
