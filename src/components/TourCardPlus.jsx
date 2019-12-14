import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/tourCardPlus.css";

// function TourCardPlus({ tours }) {
function TourCardPlus(props) {

  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([])

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

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/booking") // remplacer ensuite par "url" car définit dans le handler
      .then(res => {
        setBookings(res.data);

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function placesLeft(tour) {
    let maxPeople = tour.maxPeople;
    let bookingsList = bookings.filter(b => b.tour === tour._id)
    let sum = bookingsList.reduce((sum, b) => {
      return sum += b.participants
    }, 0)
    return maxPeople - sum
  }

  console.log(placesLeft)

  return (
    <div>
      {props.tours.map((tour, i) => (
        (placesLeft(tour) > 0 &&
          <>
            <div className="tour-card-plus" key={i}>
              <h3 className="tour-card-plus-title">{tour.name}</h3>
              <div className="tour-card-plus-WO-title">
                <div className="group-info-img">
                  <div className="img-container-card-plus">
                    <img src={tour.tourPicture} alt="card-plus" />
                  </div>

                  <div className="infos-tour">
                    {/* <div className="infos"> */}
                    <p className="thematics">{tour.thematics}</p>

                    <div className="info-icons">
                      <p>
                        <i className="fas fa-users"></i>
                        <span>{placesLeft(tour)}</span> people
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
                      {/* </div> */}
                    </div>
                    <Link to={"/tours/" + tour._id}>
                      <button className="btn">See tour</button>
                    </Link>
                  </div>
                </div>
                <div key={i} class="mapouter"></div>
                <div class="gmap-canvas">
                  <iframe
                    width="300"
                    height="200"
                    id="gmap_canvas"
                    title="map"
                    src={
                      "https://maps.google.com/maps?q=" +
                      encodeURI(tour.meetingLocation) +
                      "&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    }
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  {/* <a href="https://www.crocothemes.net"></a> */}
                </div>
              </div>
            </div>
          </>
        )))}
    </div>
  );
}

export default TourCardPlus;
