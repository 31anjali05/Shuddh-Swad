import "./Login.css";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

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
        <div
          className="container "
          style={{
            textAlign: "center",
            color: "#3d081b",
            height: "710px",
          }}
        >
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
            <route>
              <link></link>
            </route>
            <button className="signInBtn" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
