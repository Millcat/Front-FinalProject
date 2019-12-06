import React, { useState } from "react";

const EditTour = props => {
  const [selectedTour, setSelectedTour] = useState(null);
  console.log(props);


  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formTour) {
      formData.append(key, formTour[key])
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/tours/", formData)
      .then(res => {
        props.history.push("/all-tours");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    selectedTour !== null && (
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.name}
            type="text"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlFile1">
          <Form.Label>Tour Picture</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.tourPicture}
            type="file"
            name="tourPicture"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Max number of people</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.maxPeople}
            type="number"
            name="maxPeople"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Dates</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.Dates}
            type="date"
            name="dates"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Price/person</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.duration}
            type="number"
            name="price"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Price/person</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.price}
            type="number"
            name="duration"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>Meeting point</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.meetingLocation}
            type="text"
            name="meetingLocation"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Thematic</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={selectedTour.thematics}
            as="select"
            name="thematics"
            required
          >
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
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">
              Choose language(s)
            </label>
            <select
              multiple
              className="form-control"
              onChange={handleChange}
              value={selectedTour.languages}
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
          <Form.Label>Description</Form.Label>
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
        <button>
          Update
                  </button>
      </Form>
    )
  );
};
export default EditedTour;
