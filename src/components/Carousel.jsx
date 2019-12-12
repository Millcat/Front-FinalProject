import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.css";

const Carou = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/paris-seine.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="title">Paris Experience</h3>
          <p className="description">Visit famous places</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/paris-street-art.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="title">Paris Experience</h3>
          <p className="description">Enjoy street art</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/apero.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3 className="title">Paris Experience</h3>
          <p className="description">Cook or eat specialities</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/fashion-week.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="title">Paris Experience</h3>
          <p className="description">Come and see fashion show</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carou;
