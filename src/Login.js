import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    // prevents page from refreshing
    e.preventDefault();

    //some fancy firebase login shiiiiiitttt!!
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth object created on register: " + auth);

        // If user is logged in (there is an auth object) then push the browser history to /
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    // prevents page from refreshing
    e.preventDefault();

    //some fancy firebase register stuf!!
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth object created on register: " + auth);

        // If user is logged in (there is an auth object) then push the browser history to /
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG12.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to AMAZON FAKE CLONE's conditions and
          Use.PLease see our Privacy Notice, our Cookie Notice and our interes
          based ads notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
