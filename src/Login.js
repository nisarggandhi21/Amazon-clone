import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //login event
  const login = (event) => {
    event.preventDefault(); //this stops the refresh
    // Login Logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirecting to homepage..
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //pop up alert
  };

  //register event
  const register = (event) => {
    event.preventDefault(); //this stops the refresh

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Created a user andd logged in..
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //pop up alert
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
