import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SignUp() {
  return (
    <div className="container-form">
      <Form>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name :</Form.Label>
          <Form.Control type="username" placeholder="John Doe" />
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
