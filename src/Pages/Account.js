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

    const requestaccount = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phoneno: "9999999901",
        alternateno: "0032762534",
      }),
    };
    fetch("http://127.0.0.1:8000/signup/", requestaccount)
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log("Signup attempted with:", {
      firstName,
      lastName,
      email,
      password,
    });
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
