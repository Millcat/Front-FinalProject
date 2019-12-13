import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.css";

const Carou = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/monument.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="baseline">
          <h3 className="title">Experience Paris</h3>
          <p className="description">Visit famous places</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/musee.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="baseline">
          <h3 className="title">Experience Paris</h3>
          <p className="description">The best Art Experience</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/food.jpg" alt="Third slide" />
        <Carousel.Caption className="baseline">
          <h3 className="title">Experience Paris</h3>
          <p className="description">Cook or eat specialities</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/fashion2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="baseline">
          <h3 className="title">Experience Paris</h3>
          <p className="description">Come and see fashion show</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carou;
