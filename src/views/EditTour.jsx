import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "../css/tourForm.css";
import { NavLink } from "react-router-dom";
import moment from "moment";

const EditTour = props => {
  const [selectedTour, setSelectedTour] = useState(null); // mon state initial correspond à un formulaire déjà rempli ?
  const [message, setMessage] = useState(false);

  // To render view after the update
  useEffect(() => {
    const tourId = props.match.params.id;
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tours/" + tourId)
      .then(res => {
        setSelectedTour(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // To Get the value
  const handleChange = e => {
    setSelectedTour({ ...selectedTour, [e.target.name]: e.target.value });
  };

  // To Submit updated form and to post (patch) to databse
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL + "/tours/" + selectedTour._id,
        selectedTour
      )
      .then(res => setMessage(!message))
      .catch(err => console.log(err));
  };

  return (
    selectedTour !== null && (
      <div className="container-form">
        <Form className="form-edit" onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.name}
              type="text"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlFile1">
            <Form.Label>Tour Picture:</Form.Label>
            <Form.Control
              onChange={handleChange}
              // value={selectedTour.tourPicture}
              type="file"
              name="tourPicture"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Max number of people:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.maxPeople}
              type="number"
              name="maxPeople"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={moment(selectedTour.date).format("YYYY-MM-DD")}
              type="date"
              name="date"
            />
            {console.log(moment(selectedTour.date).format("L"))}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Price/person:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.price}
              type="number"
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Duration:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.duration}
              type="number"
              name="duration"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Time of meeting:</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="time"
              name="time"
              onChange={handleChange}
              value={selectedTour.time}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Meeting point:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.meetingLocation}
              type="text"
              name="meetingLocation"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Thematic:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.thematics}
              as="select"
              name="thematics"
              required
            >
              <option value="">Choose a thematic:</option>
              <option>Food</option>
              <option>Street Art</option>
              <option>Fashion</option>
              <option>Cinema</option>
              <option>Insolite</option>
              <option>Monument</option>
              <option>Art</option>
              <option>Sports</option>
            </Form.Control>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Choose language(s):
              </label>
              <select
                multiple
                className="form-control"
                onChange={handleChange}
                // value={selectedTour.languages}
                id="exampleFormControlSelect2"
                name="languages"
              >
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
            <Form.Label>Description:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={selectedTour.description}
              as="textarea"
              rows="5"
              name="description"
              placeholder="Discover Paris off the beaten track"
              required
            />
          </Form.Group>
          <div className="container-btn-links">
            <button className="btn">Update</button>
            {message && <p>The experience has been updated succesfully !</p>}
            <div className="container-links">
              <NavLink className="links" to={"/manage-tour/"}>
                <i class="fas fa-chevron-right"></i>All my experiences
              </NavLink>
              <NavLink className="links" to={"/tours/" + selectedTour._id}>
                <i class="fas fa-chevron-right"></i>See experience
              </NavLink>
            </div>
          </div>
        </Form>
      </div>
    )
  );
};

export default EditTour;
