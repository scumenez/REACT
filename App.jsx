export default function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    /*const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").checked;

    console.log({ username, password, remember });*/

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember");

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  }

  return (
    <form onSubmit={onLogin}>
      <input data-testid="username" name="username" />
      <input data-testid="password" name="password" />
      <input data-testid="remember" name="remember" type="checkbox" />

      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
