import React from "react";
import { Link } from "react-router-dom";
import "../css/404notFound.css";

function NotFound404() {
  return (
    <div className="not-found">
      <h1>
        Oops...are you lost ? <br />
        Back to &nbsp;<Link to="/">Home</Link>
      </h1>
      {/* <img src="404-not-found-lost.jpg" alt="lost-in-paris" /> */}
      <iframe
        src="https://giphy.com/embed/d2jjuAZzDSVLZ5kI"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/lidl-voyages-confused-lost-d2jjuAZzDSVLZ5kI">
          via GIPHY
        </a>
      </p>
    </div>
  );
}

export default NotFound404;
