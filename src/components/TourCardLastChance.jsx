import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Counter from "./Counter";

function TourCardLastChance() {
  const [tours, setTours] = useState([]);

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
      <h2>Last Chance Tours !</h2>
      {tours.map((tour, i) => (
        <div className="tour-card-last-chance" key={i}>
          <img src={tour.tourPicture} alt="card-plus" />
          <div className="infos-bottom">
            <h3>{tour.name}</h3>
            {/* <Counter /> */}
            <Link to={"/tours/" + tour._id}>
              <button>See Tour</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourCardLastChance;
