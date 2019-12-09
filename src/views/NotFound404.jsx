import React from 'react'
import { Link } from "react-router-dom";
import "../css/404notFound.css"

function NotFound404() {
    return (
        <div className="not-found">
            <h1>Oops...are you lost ? <br />
                Back to &nbsp;<Link to="/">Home</Link>
            </h1>
            <img src="404-not-found-lost.jpg" alt="lost-in-paris" />
        </div>
    )
}

export default NotFound404

