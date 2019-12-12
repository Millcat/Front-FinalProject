import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/tourCardLastChance.css"
import moment from "moment";
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
    <div className="container-tour-cards">
      <h2>Last Chance Tours !</h2>
      <div className="row">
        {tours.map((tour, i) => (
          <div className="tour-card" key={i}>
            <figure className="container-img">
              <img width="500" height="254" src={tour.tourPicture} alt="card-plus" />
              <figcaption>
                <span>{tour.price} €</span>
              </figcaption>
            </figure>
            <div className="details">
              <div class="tour-rating">
                <ul class="list-unstyled clearfix">
                  <li>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                  </li>
                </ul>
              </div>
              <div className="tour-details">
                <h3><a href="http://www.ongoingthemes.com/tripandguide/tours/santorini-islands-tour/">{tour.name}</a></h3>
                <p className="tour-duration"><span className="fa fa-clock-o"></span><i class="far fa-clock"></i>{tour.duration} hours</p>
                <p className="tour-date"><span><i class="fas fa-calendar-day"></i>{moment(tour.date).format("[The] Do [of] MMMM")}s</span></p>
                <p className="remaining-spots"><span className="fa fa-clock-o"></span><i class="far fa-clock"></i>{tour.duration}</p>
                <p>Only hgjghj Spots left!</p>
              </div>
            </div>
            <div className="tour-booking">
              <a href="http://www.ongoingthemes.com/tripandguide/tours/santorini-islands-tour/">See Experience</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourCardLastChance;
