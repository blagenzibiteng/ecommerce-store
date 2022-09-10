import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b1 from "../assets/banner1.jpg";
import b2 from "../assets/banner2.jpg";
import b3 from "../assets/banner3.jpg";
import './Slider.css'





class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={b1} />
                </div>
                <div>
                    <img src={b2} />
                </div>
                <div>
                    <img src={b3}/>
                </div>
            </Carousel>
        );
    }
};


export default Slider;

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>