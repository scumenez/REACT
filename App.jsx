import { useState } from "react";

export function Welcome({ name }) {
  return <p>Hello, {name}!</p>;
}

export function InteractiveWelcome() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <h3>Name:</h3>
          <input type="text" onChange={handleNameChange} value={name} />
        </div>
        <div>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div>
          <h3>Remember me:</h3>
          <input
            type="checkbox"
            onChange={handleRememberChange}
            checked={remember}
          />
        </div>
        <Welcome name={name} />
      </form>
    </div>
  );
}
