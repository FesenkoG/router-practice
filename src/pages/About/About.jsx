import React from "react";
import Footer from "../../elements/Footer/Footer";
import NavigationBar from "../../elements/NavigationBar/NavigationBar";
import background from "../../resources/about-background-image.png";
import './About.css'

export default function About() {
    return (
        <div className="container--about">
            <NavigationBar />
            <div className="about--container--main">
                <img className="about--image" src={background} />
                <div className="container--about--text">
                    <h1>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p>
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)<br /><br />
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                    <div className="van--promotion--banner">
                        <h1>Your destination is waiting.<br />Your van is ready.</h1>
                        <button className="about--button">Explore our vans</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
