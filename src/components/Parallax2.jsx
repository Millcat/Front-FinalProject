import React from 'react'
import { Parallax } from 'react-scroll-parallax';

class Parallax2 extends React.Component {
    constructor() {
        super()

        this.state = {
            offset: 0
        };

        return (
            <header className="header" style={{ backgroundImage: `url(${imageUrl})` }} style2={{ backgroundPositionY: this.state.offset }}>
                <h1 id="tour-name" style={{ bottom: this.state.offset / 2 }}>{tour.name}</h1>
            </header>
        )
    }
}

export default Parallax2