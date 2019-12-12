import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/tour.css";
import moment from "moment";
import Button from "react-bootstrap/Button";
import UserContext from "./../auth/UserContext";
import SignIn from "./SignIn";

function Tour(props) {
  const [tour, setTour] = useState({});
  const [bookings, setBookings] = useState([]);
  const [selectChoices, setSelectChoices] = useState(null); // To chose date and number of participants
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(localStorageCart);
  const [remainingSpots, setRemainingSpots] = useState([]);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    const tourId = props.match.params.id;
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tours/" + tourId)
      .then(res => {
        // console.log("res", res);
        setTour(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const tourId = props.match.params.id;
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/booking")
      .then(res => {
        // console.log("res booking", res);
        setBookings(res.data.filter(b => b.tour === tourId));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Récupérer les valeurs de l'input participants + input du calendar ===> KO car pas de calendar + n'arrive pas à afficher des valeurs sur le select nb of participants
  const handleChange = e => {
    setSelectChoices({ ...selectChoices, [e.target.name]: e.target.value }); // ajouter le calendar
  };

  useEffect(() => {
    setRemainingSpots(getRemainingSpots());
  }, [tour]);

  // Ajouter le booking au panier
  const addToCart = e => {
    e.preventDefault();

    if (currentUser == null) {
      console.log("no booking added in LS");
      console.log("props of Tours.jsx ==> ", props);
      props.history.push("/sign-in"); // instead of => return <SignIn />
    } else {
      const updatedCart = [
        ...cart,
        {
          tourId: tour._id,
          price: tour.price,
          tourName: tour.name,
          participants: selectChoices ? Number(selectChoices.participants) : 1,
          totalPricePerTour: tour.price * Number(selectChoices.participants),
          date: tour.date,
          buyer: currentUser._id // id du user de la session en cours
        }
      ];

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // update the number of tours added to the shopCart
      // not the "React way" to do this but it's working...
      document.getElementById("nbOfToursInCart").innerHTML = updatedCart.length;
    }
  };

  // Afficher le nbre de places restantes pour un tour
  function getRemainingSpots() {
    // console.log("tour", tour);
    // console.log("bookins", bookings);
    const arr = [];
    const maxPeople = tour.maxPeople;
    if (bookings.length) {
      const participants = bookings.reduce((acc, curr) => {
        return (acc += curr.participants);
      }, 0);
      const remainingSpots = maxPeople - participants;
      for (let i = 0; i < remainingSpots; i++) {
        arr.push(i + 1);
      }
    } else {
      for (let i = 0; i < maxPeople; i++) {
        arr.push(i + 1);
      }
    }
    return arr;
  }

  const imageUrl = tour.tourPicture;
  const newDate = moment(tour.date).format("[The] Do [of] MMMM, YYYY");

  console.log(tour);

  if (Object.keys(tour).length === 0) return <div>No Spots left</div>;
  return (
    <div>
      <header
        className="header overlay"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="overlay">
          <h1 id="tour-name">{tour.name}</h1>
        </div>
      </header>
      <div className="main">
        <div className="all-sections">
          <section id="main-infos">
            <h5>TOUR OVERVIEW <i className="fas fa-binoculars"></i></h5>
            <div className="containers-overview">
              <div className="container-overview">
                <div>
                  <p>
                    <i class="fas fa-euro-sign"></i> Price per person:
                  </p>
                  <p>{tour.price}€</p>
                </div>
                <div>
                  <p>
                    <i class="fas fa-users"></i> Maximum Number of People:{" "}
                  </p>
                  <p>{tour.maxPeople}€</p>
                </div>
              </div>
              <div className="container-overview">
                <div>
                  <p>
                    <i class="fas fa-globe-asia"></i>Language(s):
                  </p>
                  <p>{tour.languages}</p>
                </div>
                <div>
                  <p>
                    <i class="far fa-clock"></i>Tour duration:
                  </p>
                  <p>{tour.duration} hours</p>
                </div>
              </div>
            </div>
          </section>
          <section id="guide-card">
            <h5>
              YOUR GUIDE <i class="fas fa-user"></i>
            </h5>
            <div style={{ backgroundImage: `url(${tour.guide.userPicure})}` }}>
              <img src={tour.guide.userPicture}></img>
            </div>
            <div>
              <p>{tour.guide.username}</p>
              <p>{tour.guide.age}</p>
              <p>{tour.guide.description}</p>
            </div>
          </section>
          <section id="meeting-location">
            <h5>
              MEETING LOCATION & TIME<i class="fas fa-map-marker-alt"></i>
            </h5>
            <p>{tour.meetingLocation}</p>
            <p>let's meet at{tour.time}</p>
          </section>
          <section id="description">
            <h5>YOUR PROGRAM <i class="fas fa-clipboard-list"></i></h5>
            <p>{tour.description}</p>
          </section>
        </div>

        <aside>
          <div className="h2-title">
            <h2>BOOKING</h2>
          </div>
          <div className="main-aside">
            <div className="container-conditions">
              <div>
                <i class="fas fa-check"></i>
                <span>Instant confirmation</span>
              </div>
              <div>
                <i class="fas fa-check"></i>
                <span>Cancel up to 3 days</span>
              </div>
              <div>
                <i class="fas fa-check"></i>
                <span>Customer service 24/7</span>
              </div>
            </div>
            <div className="date">
              <i class="fas fa-calendar-day"></i>
              <p>{newDate}</p>
            </div>
            <form className="form-participants">
              <div className="container-participants">
                <i class="fas fa-user"></i>
                <label>Select participants: </label>
                <select
                  placeholder="select"
                  name="participants"
                  onChange={handleChange}
                >
                  {remainingSpots.length
                    ? remainingSpots.map((spot, i) => (
                      <option key={i}>{spot}</option>
                    ))
                    : ""}
                </select>
              </div>
            </form>
            <div className="container-btn">
              {remainingSpots.length < 10 ? (
                <span id="spots-left">
                  Only {remainingSpots[remainingSpots.length - 1]} spots left!
                </span>
              ) : (
                  <span></span>
                )}
              <Button className="btn-cart" onClick={addToCart}>
                Add to cart
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Tour;
