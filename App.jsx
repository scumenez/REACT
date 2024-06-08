import { useState , useEffect , useRef } from "react";
import "./App.css";
import CounterDisplay from "./CounterDisplay";

export function App({ initialValue = 0, incrementBy = 1, decrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const previousCountRef = useRef(initialValue);

  useEffect(() => {
    if (counter > previousCountRef.current) {
      directionRef.current = "up";
    } else if (counter < previousCountRef.current) {
      directionRef.current = "down";
    }
    if (directionRef.current !== previousCountRef.current) {
      console.log(directionRef.current);
    }
    previousCountRef.current = counter;
  }, [counter]);

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
