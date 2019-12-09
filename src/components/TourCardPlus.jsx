import React from 'react'
import "../css/tourCardPlus.css"


// function TourCardPlus({ tours }) {
function TourCardPlus(props) {

    return (
        <div>
            {props.tours.map((tour, i) => (
                <div className="tour-card-plus" key={i}>
                    <img src={tour.tourPicture} alt="card-plus" />
                    <div className="infos-tour">
                        <h3>{tour.name}</h3>
                        <p className="thematics">{tour.thematics}</p>
                        <p> <i className="fas fa-users"></i><span>{tour.maxPeople}</span> people</p>
                        <p> <i className="fas fa-comments"></i> {tour.languages.map((language, i) => (
                            <span key={i}>{language} </span>
                        ))}</p>
                        <p><i className="fas fa-coins"></i><span> {tour.price}</span> €</p>
                        <button>About this tour</button>
                        {/* mettre un Link sur le bouton */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TourCardPlus;
