import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Rating = (props) => {
    const [rating, setRating] = useState(null)
    const [selectedRate, setSelectedRate] = useState(null)


    const handleChangeRate = e => {
        console.log(e)
        setSelectedRate({ ...rating }); // ajouter le calendar
    };

    const handleSubmitRate = e => {
        e.preventDefault();
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "/tour" + selectedRate)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    };


    return (
        <div className="rating rating2" onSubmit={handleSubmitRate}>
            <a href="#5" title="5" onChange={handleChangeRate}>★</a>
            <a href="#4" title="4" onChange={handleChangeRate}>★</a>
            <a href="#3" title="3" onChange={handleChangeRate}>★</a>
            <a href="#2" title="2" onChange={handleChangeRate}>★</a>
            <a href="#1" title="1" onChange={handleChangeRate}>★</a>
        </div>
    )
}


export default Rating
