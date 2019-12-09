import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/manageTour.css";
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Counter from "../components/Counter"


const ManageTour = props => {
  const [tours, setTours] = useState([]);
  // const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tours")
      .then(res => {
        setTours(res.data);
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = id => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + "/tours/" + id)
      .then(res => {
        const copy = tours.filter(a => a._id !== id);
        setTours(copy);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const handleSelectedTour = tour => {
  //   setSelectedTour({ ...tour });
  // };

  // const handleSelectedTour = tour => {
  //   // setSelectedTour({ ...tour });
  //   axios.get(process.env.REACT_APP_BACKEND_URL + "/tours/" + selectedTour._id, selectedTour)
  //     .then(res => props.history.push("/edit-tour/" + selectedTour._id))
  // };


  return (
    <div className="container-table">
      <h1>Edit your experience</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tour Picture</th>
            <th>Max people</th>
            <th>Price/person</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!tours.length ? (
            <tr>
              <td>No experiences to display</td>
            </tr>
          ) : (
              tours.map((tour, i) => (
                <tr key={i}>
                  <td>{tour.name}</td>
                  <td>
                    <img src={tour.tourPicture} alt={tour.name} className="tourPicture" />
                  </td>
                  <td>{tour.maxPeople}</td>
                  <td>{tour.price}</td>
                  <td>
                    <NavLink to={"/edit-tour/" + tour._id}><Button className="btn">Edit</Button></NavLink>
                  </td>
                  <td>
                    <Button className="btn-delete" onClick={e => handleDelete(tour._id)}>Delete</Button>
                  </td>
                </tr>
              )))}
        </tbody>
      </table>
    </div>
  );
}
export default ManageTour;