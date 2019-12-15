import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../css/shopCart.css";

const ShopCart = () => {
  const [tours, setTours] = useState([]);
  const [message, setMessage] = useState(false); //see EditTours
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(dataFromLS);
    setTours(dataFromLS);
  }, []);

  // console.log(tours);

  const handleSubmit = e => {
    e.preventDefault();

    // setTours();

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/booking", tours) // Envoyer les datas ici
      .then(res => {
        setMessage(!message);
      })
      .catch(err => {
        console.log(err);
      });

    // use localStorage.clear() to clear all the localStorage
    localStorage.removeItem("cart");
    // Clear the shopcart icon
    document.getElementById("nbOfToursInCart").innerHTML = "";
  };

  const handleRemove = (e, index) => {
    e.preventDefault();

    // update the list inside localStorage regarding the position(=selection)
    const updatedTours = tours.filter((tour, i) => i !== index);
    setTours(updatedTours);
    localStorage.setItem("cart", JSON.stringify(updatedTours));

    // update the shopcart icon with the number of tours left in the shopcart
    updatedTours.length > 0
      ? (document.getElementById("nbOfToursInCart").innerHTML =
          updatedTours.length)
      : (document.getElementById("nbOfToursInCart").innerHTML = "");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <form className="shop-form height" onSubmit={handleSubmit}>
        <table className="shopcart">
          <thead>
            <tr>
              <th>Tour Name</th>
              <th>Date</th>
              <th>Participants</th>
              <th>€ / pers</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="body-table">
            {tours.map((tour, i) => (
              <tr key={i}>
                <td>{tour.tourName}</td>
                <td>{moment(tour.date).format("[The] Do [of] MMMM, YYYY")}</td>
                <td>{tour.participants}</td>
                <td>{tour.price}</td>
                <td>{tour.totalPricePerTour}</td>
                <td>
                  <i
                    className="fa fa-window-close"
                    aria-hidden="true"
                    onClick={e => handleRemove(e, i)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tours.length === 0 && (
          <p className="if-empty-cart">You have no tour yet ...</p>
        )}

        <div className="total-order">
          Total of your cart:
          <span>
            {tours.reduce((acc, tour) => {
              return acc + tour.totalPricePerTour;
            }, 0)}
          </span>
          €
        </div>

        <button className="btn submit">Validate</button>
        {message && <p className="tours-booked">Your tours are booked !</p>}
      </form>
    </div>
  );
};

export default ShopCart;
