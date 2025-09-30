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
    console.log("Login attempted with:", { email, password });
  };
  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        <div className="container1 loginPage">
       
          
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
    </>
  );
}

export default Login;
