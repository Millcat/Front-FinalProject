import React, { useState, useEffect } from 'react'
import axios from "axios";


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



    return (
        <div>

            {tours.map((tour, i) => (
                <div className="tour-card-plus" key={i}>
                    <img src={tour.tourPicture} alt="card-plus" />
                    <div className="infos-tour">
                        <h3>{tour.name}</h3>
                        <p>{tour.thematics.map(thematic =>
                            <><span>{thematic}</span>, </>)}</p>
                        <p>{tour.maxPeople}</p>
                        <p>{tour.languages.map(language =>
                            <><span>{language}</span>, </>)}</p>
                        <p><span>{tour.price}</span> €</p>
                        {/* <p>Proposé par {tour.user.name}</p> */}
                        <button>See Tour</button>
                    </div>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default TourCardPlus;
