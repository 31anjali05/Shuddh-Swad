import "./Login.css";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import Account from "./Account";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // create request object => {header => {cookies,content-type:application/json},body=>{main data},method =>{POst}}
    // fetch (url,requestobj) => {response} => {error}
    const requestdata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("http://127.0.0.1:8000/login/", requestdata)
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log("Login attempted with:", { email, password });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#f2efdd" }}
      >
        <div className="loginPage">
          <div>
            <div>
              <p style={{ fontSize: "45px" }}>Login</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Email">
                    <Form.Control
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="field"
                    />
                  </FloatingLabel>
                </div>
                <div>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="field"
                    />
                  </FloatingLabel>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link to="/" className="resetpsd">
                        Forgot your password?
                      </Link>
                    </li>
                  </ul>
                </div>
                <button className="signInBtn" type="submit">
                  Sign in
                </button>
                <div>
                  <ul>
                    <li>
                      <Link to="/account">Create Account</Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
