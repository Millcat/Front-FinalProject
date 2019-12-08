
import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"


function Tour(props) {
    const [tour, setTour] = useState({});
    const [selectChoices, setSelectChoices] = useState(null); // To chose date and number of participants
    const [cartStatus, setCardStatus] = useState(null);

    // Récupérer les datas du Tour pour les afficher ==> OK
    useEffect(() => {
        const tourId = props.match.params.id;
        axios.get(process.env.REACT_APP_BACKEND_URL + "/tours/" + tourId)
            .then(res => {
                setTour(res.data);
                console.log(res);
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

    // Récupérer le nbre de places restantes sous forme d'array de chiffres (1,2,3,4 etc)
    // function getRemainingSpots() {
    //     var bookingMaxPeople = tour.bookings.map(booking => tour.booking.maxPeople)
    //     for (let i = 0; i < (tour.maxPeople - bookingMaxPeople); i++) {
    //         return i
    //     }
    // }

    return (
        <div>
            <img src={tour.tourPicture} id="img-tour"></img>
            <h1 id="tour-name">{tour.name}</h1>
            <p>Maximum Number of People: {tour.maxPeople}</p>
            <p>Language(s): {tour.languages}</p>
            <p>Price per person: {tour.price} €</p>
            <p>Tour location: {tour.duration} hours</p>
            <p>Tour meeting location: {tour.meetingLocation}</p>
            <p>Tour description: {tour.description}</p>

            <form>
                <p>Check availibility: {tour.dates}</p>
                <label>Select participants:</label>
                <select name="maxPeople">
                    {/* <option onChange={handleChange}>{countParticipants}</option> */}
                </select>
                <button onClick={addToCart}>Add to cart</button>
            </form>
        </div>
    )
}

export default Tour

/* ---- Calendar + Select number of people-----*/
// Récupérer les inputs du calendar et des participants (handleChange)
// Input Select Participants : faire la différence entre maxPeople(prop de tour) et de participants qui ont déjà validé leur booking (prop de booking)

/* ---- bouton add to cart-----*/
// Poster les datas suivantes dans BDD : status : added to cart ; tour: tourId ; Participants & Chosen Date
