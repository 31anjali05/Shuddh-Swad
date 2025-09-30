import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
  };

  return (
    <>
      <div style={{ backgroundColor: "#f2efdd" }}>
        <div className="container account">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <p style={{ fontSize: "45px" }}>Create Account</p>
              <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="First Name">
                  <Form.Control
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                    className="field"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Last Name">
                  <Form.Control
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                    className="field"
                  />
                </FloatingLabel>
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
                <button className="signInBtn" type="submit">
                  Create
                </button>
              </form>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;
