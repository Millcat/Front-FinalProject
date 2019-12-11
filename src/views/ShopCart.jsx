import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../css/shopCart.css";

const ShopCart = () => {
  const [tours, setTours] = useState([]);
  // const [message, setMessage] = useState(false); //see EditTours

  useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(dataFromLS);
    setTours(dataFromLS);
  }, []);

  console.log(tours);

  // Logique à ajouter au ShopCart lors de la validation du panier pour add booking en bdd
  const handleSubmit = e => {
    e.preventDefault();

    // setTours();

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/booking", tours) // Envoyer les datas ici
      .then(res => {
        console.log("Faire un redirect ici ou autre pour paiement");
        // setMessage(!message);
      })
      .catch(err => {
        console.log(err);
      });

    // use localStorage.clear() quand on cliquera sur "Validate the booking"
    console.log("form submitted !");
  };

  const handleRemove = e => {
    e.preventDefault();

    // use localStorage.removeItem("cart") si on veut delete un tour dans la shopCart ==> créé fonction handleDelete
    console.log("tour removed from you shopcart !");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <form className="shop-form" onSubmit={handleSubmit}>
        <table className="shopcart">
          <thead>
            <tr>
              <th>Tour Name</th>
              <th>Date</th>
              <th>Participants</th>
              <th>€ / pers</th>
              <th>Total Price / Tour</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
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
                    onClick={handleRemove}
                  ></i>
                  {/* ADD THIS PROPS TO REMOVE THE TOUR onClick={e => handleDelete(tour._id)}
                    AND USE localStorage.removeItem("tour._id") by its ._id or its position */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tours.length === 0 && (
          <p className="if-empty-cart">You have no tour yet ...</p>
        )}

        <div className="total-order">
          Total of your order:
          <span>
            {tours.reduce((acc, tour) => {
              return acc + tour;
            }, 0)}
          </span>
          €
        </div>

        <button className="btn-submit">Proceed to payment</button>
        {/* {message && <p>Booking validated !</p>} */}
      </form>
    </div>
  );
};

export default ShopCart;
