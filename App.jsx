import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}

export default App;
