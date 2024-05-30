import Time from "./Time";

export function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time: ${currentTime}`);
  };
  return (
    <div>
      <h1>Click for current Time</h1>
      <Time onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
