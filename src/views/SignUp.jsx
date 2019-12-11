import React, { useState } from "react";
import handler from "../api/handler"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Button";
import "../index.css"
import { Link } from "react-router-dom";



function SignUp(props) {
  const [formUser, setFormUser] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formUser) {
      formData.append(key, formUser[key]);
    }
    handler.post(process.env.REACT_APP_BACKEND_URL + "/signup", formData)
      .then(user => {
        console.log(user);
        props.history.push("/sign-in");
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      setFormUser({ ...formUser, [key]: e.target.files[0] });
    } else {
      setFormUser({ ...formUser, [e.target.name]: value });
    }
  }

  return (
    <div className="container-form">
      <h1>Create your account</h1>
      <Form onSubmit={handleSubmit} onChange={handleChange} className="form-signup">
        <Form.Row className="col2">
          <Form.Group className="label-input">
            <Form.Label className="label">Username:</Form.Label>
            <Form.Control type="text" placeholder="John Doe" name="username" />
          </Form.Group>
          <Form.Group className="label-input" >
            <Form.Label className="label">Email:</Form.Label>
            <Form.Control type="email" placeholder="address@email.com" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="col2">
          <Form.Group className="label-input">
            <Form.Label className="label">Age:</Form.Label>
            <Form.Control type="number" name="age" />
          </Form.Group>
          <Form.Group className="label-input">
            <Form.Label className="label">Picture:</Form.Label>
            <Form.Control type="file" name="userPicture" />
          </Form.Group>
          <Form.Group className="label-input">
            <Form.Label className="label">Password:</Form.Label>
            <Form.Control type="password" name="password" />
          </Form.Group>
        </Form.Row>

        <Form.Row controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows="5" name="description" placeholder="Discover Paris off the beaten track" />
        </Form.Row>
        <div className="container-btn-signup">
          <Button type="submit" className="btn btn-sign-up">Sign Up</Button>
        </div>
        <p className="parag">
          Already a member ? please <Link to="/sign-in" className="link"> Signin</Link>
        </p>
      </Form>
    </div>
  );
}


export default SignUp;
