import React, { useState } from "react";
import "../assets/styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically handle login logic, such as sending data to an API
    console.log("Login details:", { username, password, remember });
  };

  return (
    <div id="login" className="wrapper">
      <div className="main-1">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Login Here!!</h2>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <ion-icon className="icon" name="person"></ion-icon>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ion-icon className="icon" name="lock-closed"></ion-icon>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Keep me logged in
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn1">Login</button>
        </form>
        <p>
          Don't have an account? <a style={{ color: "#7d5a50" }} href="#register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
