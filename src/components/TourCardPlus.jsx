import React from "react";
import { Link } from "react-router-dom";
import "../css/tourCardPlus.css";

// function TourCardPlus({ tours }) {
function TourCardPlus(props) {
  return (
    <div>
      {props.tours.map((tour, i) => (
        <div className="tour-card-plus" key={i}>
          <img src={tour.tourPicture} alt="card-plus" />

          <div className="infos-tour">
            <h3>{tour.name}</h3>

            <div className="infos">
              <p className="thematics">{tour.thematics}</p>

              <div className="info-icons">
                <p>
                  <i className="fas fa-users"></i>
                  <span>{tour.maxPeople}</span> people
                </p>
                <p>
                  <i className="fas fa-comments"></i>
                  {tour.languages.map((language, i) => (
                    <span key={i}>{language} </span>
                  ))}
                </p>
                <p>
                  <i className="fas fa-coins"></i>
                  <span> {tour.price}</span> €
                </p>
              </div>

              <Link to={"/tours/" + tour._id}>
                <button className="btn">See tour</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourCardPlus;
