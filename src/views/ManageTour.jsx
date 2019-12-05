import React, { useState, useEffect } from "react";
import axios from "axios";
const ManageTour = props => {
    const [tours, setTours] = useState([]);
    const [selectedTour, setSelectedTour] = useState(null);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/manage-tour")
            .then(res => {
                setTours(res.data);
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

    const handleSelectedTour = tour => {
        setSelectedTour({ ...tour });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(selectedTour);
        axios
            .patch(
                process.env.REACT_APP_BACKEND_URL + "/tours/" + selectedTour._id,
                selectedTour
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    const handleChange = e => {
        setSelectedTour({ ...selectedTour, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h1>Edit your experience</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tour Picture</th>
                        <th>Max Number of People</th>
                        <th>Dates</th>
                        <th>Price/person</th>
                        <th>Meeting Point</th>
                        <th>Thematic</th>
                        <th>Language(s)</th>
                        <th>Description</th>
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
                                    <td name="name">
                                        {tour.name}
                                    </td>
                                    <td>
                                        <img src={tour.tourPicture} alt={tour.name} />
                                    </td>
                                    <td>{tour.description}</td>
                                    <td>
                                        <button onClick={e => handleDelete(tour._id)}>X</button>
                                    </td>
                                    <td>
                                        <button onClick={e => handleSelectedTour(tour)}>
                                            Update
                  </button>
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
