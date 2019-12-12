import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/tourCardLastChance.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function TourCardLastChance() {
  const [tours, setTours] = useState([]);
  const [lastChance, setLastChance] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tours") // remplacer ensuite par "url" car définit dans le handler
      .then(res => {
        console.log(res)
        setTours(res.data);

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function placesLeft(tour) {
    let maxPeople = tour.maxPeople;
    let bookings = tour.bookings
    let sum = bookings.reduce((sum, b) => {
      return sum += b.participants
    }, 0)
    return maxPeople - sum
  }


  if (!tours.length) return null
  return (
    <div className="container-tour-cards">
      <h2>Last Chance Tours !</h2>
      <div className="row">
        {tours.sort((t1, t2) => {
          if (t1.date > t2.date) return 1;
          else return -1
        }).map((tour, i) => (
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
                <p>Only {placesLeft(tour)} spots left!</p>
              </div>
            </div>
            <div className="tour-booking">
              <Link className="link-experience" to={"/tours/" + tour._id}>See experience</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}