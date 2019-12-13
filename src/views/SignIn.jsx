import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react"
import handler from "../api/handler"
import UserContext from "./../auth/UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/auth.css"

function SignIn(props) {

  const [email, setEmail] = useState("tata@email.com");
  const [password, setPassword] = useState("1234");
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;
  const [message, setMessage] = useState("")
  console.log(currentUser)

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await handler.post("/signin", { email, password });
      setCurrentUser(apiRes.data);
      props.history.push("/")
    } catch (err) {
      setCurrentUser(null);
      setMessage("wrong credentials")
    }
  };

  return (
    <div className="container-form viewHeight">
      <h1>Sign in</h1>
      <Form onSubmit={handleSubmit} className="form-signin">
        <Form.Group controlId="formBasicEmail" className="container-input">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="container-input">
          <Form.Label>Password:</Form.Label>
          <Form.Control name="password"
            type="password"
            placeholder="Password"
            defaultValue="1234"
            required
            value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <p>{message}</p>
        <div className="container-btn">
          <Button variant="primary" type="submit">Sign In</Button>
        </div>
      </Form>
      <p className="parag">
        No account yet ? please{" "}
        <Link to="/sign-up" className="link">
          signup
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
