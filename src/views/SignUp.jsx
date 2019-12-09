// Submit doesn't work => Status 400

import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function SignUp(props) {
  const [formUser, setFormUser] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formUser) {
      formData.append(key, formUser[key]);
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/signup", formData)
      .then(res => {
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      setFormUser({ ...formUser, [key]: e.target.files[0] });
    } else {
      setFormUser({ ...formUser, [e.target.name]: value });
      console.log(e.target.value);
    }
  }

  return (
    <div className="container-form">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name :</Form.Label>
          <Form.Control name="username" type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Picture:</Form.Label>
            <Form.Control name="pictureTour" type="file"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Age:</Form.Label>
            <Form.Control type="number" name="age"></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="description"
            placeholder="Discover Paris off the beaten track"
          />
        </Form.Group>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default SignUp;
