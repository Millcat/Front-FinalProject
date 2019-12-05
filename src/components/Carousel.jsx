import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Carou = () => {
    return <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/paris-seine.jpeg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Paris Experience</h3>
                <p>Visit famous places</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/paris-food.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Paris Experience</h3>
                <p>Enjoy art</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/paris-street-art.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Paris Experience</h3>
                <p>Cook or eat specialities</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default Carou;