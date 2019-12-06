import React from 'react'
import TourCardPlus from "../components/TourCardPlus"
import Filters from "../components/Filters"

import allTours from "../css/allTours.css"



function AllTours(props) {


    return (
        <div className="all-tours">
            <h1>Find your experience...</h1>
            <Filters />
            <TourCardPlus />
        </div>
    )
}

export default AllTours;
