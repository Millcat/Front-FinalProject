import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../css/tourCardPlus.css"


function TourCardPlus(props) {
    const [tours, setTours] = useState([]);
    console.log(props);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/tours") // remplacer ensuite par "url" car définit dans le handler
            .then(res => {
                setTours(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log(tours)

    return (
        <div>

            {tours.map((tour, i) => (
                <div className="tour-card-plus" key={i}>
                    <img src={tour.tourPicture} alt="card-plus" />
                    <div className="infos-tour">
                        <h3>{tour.name}</h3>
                        <p className="thematics">{tour.thematics}</p>
                        <p>{tour.maxPeople} people</p>
                        <p>{tour.languages.map((language, i) => (
                            <span key={i}>{language}, </span>
                        ))}</p>
                        <p><span>{tour.price}</span> €</p>
                        <button>About this tour</button>
                        {/* mettre un Link sur le bouton */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TourCardPlus;
