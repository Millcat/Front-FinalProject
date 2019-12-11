import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/manageTour.css";
import { NavLink } from "react-router-dom";


const ManageTour = props => {
  const [tours, setTours] = useState([]);
  // const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/toursFiltered")
      .then(res => {
        console.log(res.data);
        setTours(res.data);
        console.log(res);
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
                    <img
                      src={tour.tourPicture}
                      alt={tour.name}
                      className="tourPicture"
                    />
                  </td>
                  <td>{tour.maxPeople}</td>
                  <td>{tour.price}</td>
                  <td>
                    <NavLink to={"/edit-tour/" + tour._id}>
                      <button className="btn">Edit</button>
                    </NavLink>
                  </td>
                  <td>
                    <i class="fa fa-window-close" aria-hidden="true" onClick={e => handleDelete(tour._id)} ></i>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
};
export default ManageTour;
