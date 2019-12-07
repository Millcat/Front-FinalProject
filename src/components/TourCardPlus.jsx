import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../css/tourCardPlus.css"


// function TourCardPlus({ tours }) {
function TourCardPlus(props) {


    console.log(props.tours)

    return (
        <div>
            {props.tours.map((tour, i) => (
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
