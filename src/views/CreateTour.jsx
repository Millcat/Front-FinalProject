import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "../css/tourForm.css";
import Autocomplete from "../components/Autocomplete";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

// import CalendarForm from "../components/CalendarForm"

const CreateTour = props => {
  const [formTour, setFormTour] = useState({});
  const [message, setMessage] = useState(false);
  const [tour, setTour] = useState({})
  // Change of all the inputs except calendar
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      setFormTour({ ...formTour, [key]: e.target.files[0] });
    } else if (key === "languages") {
      const options = Array.from(e.target.options);
      const valueOptions = options.filter(o => o.selected).map(o => o.value);
      setFormTour({ ...formTour, [key]: valueOptions });
    } else {
      setFormTour({ ...formTour, [key]: value });
    }
  }

  // const handleDatesChange = (startDate, endDate) => {
  //   console.log(startDate._d, endDate)
  //   setFormTour({ ...formTour, startDate: startDate._d, endDate: endDate ? endDate._d : null }) // -d n'est pad defined ???
  // }

  const handleSubmit = e => {
    e.preventDefault();
    // const date = formTour.dates 
    const formData = new FormData();
    for (let key in formTour) {
      formData.append(key, formTour[key]);
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/tours", formData, { withCredentials: true }) // Envoyer les datas ici
      .then(res => {
        setMessage(!message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const tourId = (id) => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tours/" + id)
      .then(res => {
        setTour(res.data.id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  console.log(tourId)

  return (
    <div
      className="container-form"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <h1>Create your experience</h1>
      <Form className="form">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            value={formTour.name}
            placeholder="John Doe"
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlFile1">
          <Form.Label>Tour Picture</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="file"
            name="tourPicture"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Max number of people</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="number"
            name="maxPeople"
            placeholder="6"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Select a date:</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="date"
            name="date"
            placeholder="6"
          />
          {/* <CalendarForm name="dates" handleDatesChange={handleDatesChange} /> */}
          {/* <Form.Control onChange={handleChange} type="date" name="dates" /> */}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Price/person</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="20"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="number"
            name="duration"
            placeholder="2"
          />
        </Form.Group>
        <Autocomplete />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Thematic *</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formTour.thematics}
            as="select"
            name="thematics"
          >
            <option value="">Choose a thematic</option>
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
              Choose language(s)
            </label>
            <select
              multiple
              className="form-control"
              id="exampleFormControlSelect2"
              name="languages"
            >
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="Japanese">Japanese</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description *</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows="5"
            name="description"
            value={formTour.description}
            placeholder="Discover Paris off the beaten track"
          />
        </Form.Group>
        <div className="container-links">
          <Button className="btn-create" type="submit">Create tour</Button>
          {message && <p>The experience has been created succesfully !</p>}
          <div className="div-links">
            <NavLink className="links" to={"/tours/" + tourId}>
              <i className="fas fa-chevron-right"></i>Go check my experience
          </NavLink>
            <NavLink className="links" to={"/manage-tour/"}>
              <i className="fas fa-chevron-right"></i>See my list of experiences
          </NavLink>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateTour;
