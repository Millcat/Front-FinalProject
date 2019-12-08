import React from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SignIn() {
    return (
        <div className="container-form">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default SignIn
