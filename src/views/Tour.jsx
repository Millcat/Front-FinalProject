import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import Calendar from "../components/Calendar"
import "../css/tour.css"

function Tour(props) {
    const [tour, setTour] = useState({});
    const [selectChoices, setSelectChoices] = useState(null); // To chose date and number of participants
    // const [cartStatus, setCardStatus] = useState(null);

    // Récupérer les datas du Tour pour les afficher ==> OK
    useEffect(() => {
        const tourId = props.match.params.id;
        axios.get(process.env.REACT_APP_BACKEND_URL + "/tours/" + tourId)
            .then(res => {
                setTour(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Récupérer les valeurs de l'input participants + input du calendar ===> KO car pas de calendar + n'arrive pas à afficher des valeurs sur le select nb of participants
    const handleChange = e => {
        setSelectChoices({ ...selectChoices, [e.target.name]: e.target.value }); // ajouter le calendar
    };

    // Ajouter le booking au panier
    const addToCart = e => {
        e.preventDefault();
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "/booking")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    };

    // Afficher le nbre de places restantes en fonction de la date sélectionnée
    function getRemainingSpots() {
        const maxPeople = tour.maxPeople
        const participants = tour.bookings.reduce((acc, curr) => {
            return acc += curr.participants;
        }, 0);
        const remainingSpots = maxPeople - participants;
        const arr = [];
        for (let i = 0; i < remainingSpots; i++) {
            arr.push(i + 1)
        }
        return arr;

        // return tour.bookings.map(booking => {
        //     for (let i = 0; i < (maxPeople - booking.participants); i++) {
        //         return i
        //     }
        // })
    }

    const imageUrl = tour.tourPicture

    if (Object.keys(tour).length === 0) return <div>Nothing to show</div>
    return (
        <div>
            <header className="header" style={{ backgroundImage: `url(${imageUrl})` }}>
                <h1 id="tour-name">{tour.name}</h1>
            </header>
            <main className="main">
                <section id="main-infos">
                    <h5>TOUR OVERVIEW</h5>
                    <div className="containers-overview">
                        <div className="container-overview">
                            <div><p>Price per person:</p><p>{tour.price}€</p></div>
                            <div><p>Maximum Number of People: </p><p>{tour.maxPeople}€</p></div>
                        </div>
                        <div className="container-overview">
                            <div><p>Language(s):</p><p>{tour.languages}</p></div>
                            <div><p>Tour duration:</p><p>{tour.duration} hours</p></div>
                        </div>
                    </div>
                </section>
                <section id="guide-card">
                    <h5>YOUR GUIDE</h5>
                    {/* <p>{tour.user.username}</p>
                    <p>{tour.user.age}</p>
                    <p>{tour.user.description}</p> */}
                </section>
                <section id="meeting-location">
                    <h5>MEETING LOCATION</h5>
                    <p>Tour meeting location: {tour.meetingLocation}</p>
                </section>
                <section id="description">
                    <h5>TOUR OVERVIEW</h5>
                    <p>Tour description: {tour.description}</p>
                </section>
                <section id="user-inputs">
                    <form>
                        <p>Check availibility:</p>
                        <Calendar />
                        <label>Select participants:</label>
                        <select name="maxPeople">
                            {getRemainingSpots().map(spot => (<option>{spot}</option>))}
                        </select>
                    </form>
                </section>
                <button className="btn-cart" onClick={addToCart}>Add to cart</button>
            </main>
        </div>
    )
}

export default Tour

/* ---- Calendar + Select number of people-----*/
        // Récupérer les inputs du calendar et des participants (handleChange)
        // Input Select Participants : faire la différence entre maxPeople(prop de tour) et de participants qui ont déjà validé leur booking (prop de booking)

/* ---- bouton add to cart-----*/
        // Poster les datas suivantes dans BDD : status : added to cart ; tour: tourId ; Participants & Chosen Date
