import { useState } from "react";
import "./App.css";
import CounterDisplay from "./CounterDisplay";

export function App({ initialValue = 0, incrementBy = 1, decrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + incrementBy);
  }

  function handleDecrement() {
    setCounter((c) => c - decrementBy);
  }

  function reset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
