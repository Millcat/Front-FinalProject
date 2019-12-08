import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    // get the max number of people - number of booking.participants
    // useEffect(() => {
    //     // const tourId = props.match.params.id;
    //     axios
    //         .get(process.env.REACT_APP_BACKEND_URL + "/tours/" + tourId)
    //         .then(res => {
    //             setCount(res.data.maxPeople - res.data.booking.participants);
    //             console.log(res.data.booking.participants)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <div>
            Il reste {count} places !
        </div>
    );
}

export default Counter

