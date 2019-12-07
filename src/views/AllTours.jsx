import React, { useEffect, useState } from "react";
import TourCardPlus from "../components/TourCardPlus"
import Filters from "../components/Filters"
import axios from "axios";

import "../css/allTours.css"


function AllTours(props) {
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

    const getFilteredTours = (filters) => {
        console.log("you are in getFilteredTours!")

        //get just the names of the thematics selected
        const thematicsNames = (filters) => {
            return filters
                .filter(filter => filter.isSelected)
                .map((filter) => filter.name);
        }

        console.log(thematicsNames(filters))

        axios
            .post(process.env.REACT_APP_BACKEND_URL + "/filter", thematicsNames(filters))
            .then(res => {
                setTours(res.data); // answer from server : all my tours
                // need to render a view ==> useEffect
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <div className="all-tours">
            <h1>Find your experience...</h1>
            <Filters onChange={(filters) => getFilteredTours(filters)} />
            {/* <Filters onChange={getFilteredTours} /> same syntax*/}
            {/* 2) get the array of filters from child Filters and send it as parameter in the getFilteredTours function */}
            <TourCardPlus tours={tours} />
        </div>
    )
}

export default AllTours;
