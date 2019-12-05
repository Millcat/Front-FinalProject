import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import createTour from "../css/createTour.css"


const CreateTour = props => {
    const [formTour, setFormTour] = useState({
    });

    const handleSubmit = e => {

        e.preventDefault();
        const formData = new FormData();
        for (let key in formTour) {
            formData.append(key, formTour[key])
        }
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "/tours", formData)
            .then(res => {
                props.history.push("/all-tours");
            })
            .catch(err => {
                console.log(err);
            });
    };

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        if (e.target.type === "file") {
            setFormTour({ ...formTour, [key]: e.target.files[0] });
        } else {
            setFormTour({ ...formTour, [key]: value });
        }
    }

    return (
        <div className="container-form" onSubmit={handleSubmit} onChange={handleChange}>
            <h1>Create your experience</h1>
            <Form className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="John Doe" name="name" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlFile1">
                    <Form.Label>Tour Picture</Form.Label>
                    <Form.Control onChange={handleChange} type="file" name="tourPicture" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Max number of people</Form.Label>
                    <Form.Control onChange={handleChange} type="number" name="maxPeople" placeholder="6" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Dates</Form.Label>
                    <Form.Control onChange={handleChange} type="date" name="dates" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Price/person</Form.Label>
                    <Form.Control onChange={handleChange} type="number" name="price" placeholder="20€" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Meeting point</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="41 quai de la seine" name="name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Thematic</Form.Label>
                    <Form.Control onChange={handleChange} as="select" name="thematics" required>
                        <option value="">Choose a thematic</option>
                        <option>Food</option>
                        <option>Street Art</option>
                        <option>Fashion</option>
                        <option>Art</option>
                        <option>Monument</option>
                        <option>Cinema</option>
                        <option>Relax</option>
                        <option>Insolite</option>
                    </Form.Control>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Choose language(s)</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>French</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Chinese</option>
                            <option>German</option>
                            <option>Spanish</option>
                            <option>Chinese</option>
                            <option>Russian</option>
                        </select>
                    </div>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleChange} as="textarea" rows="5" name="description" placeholder="Discover Paris off the beaten track" required />
                </Form.Group>
                {/* Add Itinerary component*/}
                <button>Submit</button>
            </Form>
        </div>
    );
};

export default CreateTour;

