import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    setData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(data);
  };

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <h3>Name:</h3>
          <input
            data-testid="username"
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h3>Password:</h3>
          <input
            data-testid="password"
            name="password"
            type="password"
            value={data.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h3>Remember me:</h3>
          <input
            data-testid="remember"
            name="remember"
            type="checkbox"
            checked={data.remember}
            onChange={handleInputChange}
          />
        </div>

        <button disabled={!data.username || !data.password} data-testid="login">
          Login
        </button>
        <button onClick={handleResetForm} data-testid="reset">
          Reset
        </button>
      </form>

      <div data-testid="state">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
