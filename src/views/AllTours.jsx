import React, { useEffect, useState } from "react";
import TourCardPlus from "../components/TourCardPlus";
import Filters from "../components/Filters";
import axios from "axios";

import "../css/allTours.css";

function AllTours(props) {
  const [tours, setTours] = useState([]); // tours is used in the component TourCardPlus at the very end of this file

  useEffect(() => {
    getFilteredTours([], []);
  }, []);

  const getFilteredTours = (thematics, languages) => {
    console.log("you are in getFilteredTours!");

    //get just the names of the thematics selected
    const getFilterNames = filters => {
      return filters
        .filter(filter => filter.isSelected)
        .map(filter => filter.name);
    };

    const thematicsNames = getFilterNames(thematics);
    const languagesNames = getFilterNames(languages);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/toursFiltered", {
        thematicsNames,
        languagesNames
      })
      .then(res => {
        setTours(res.data); // answer from server : all my tours
        // need to render a view ==> useEffect
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="all-tours">
      <h1>Find your experience...</h1>
      <Filters
        onChange={(thematics, languages) =>
          getFilteredTours(thematics, languages)
        }
      />
      {/* <Filters onChange={getFilteredTours} /> same syntax*/}
      {/* 2) get the array of filters from child Filters and send it as parameter in the getFilteredTours function */}
      <TourCardPlus tours={tours} />
    </div>
  );
}

export default AllTours;
