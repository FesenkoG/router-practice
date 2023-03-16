import React from "react";
import Footer from "../../elements/Footer/Footer";
import "./Home.css"

export default function Home() {
    return (
        <div className="home--container">
            <main>
                <div class="home-text-container">
                    <h1 className="title">You got the travel plans, we got the travel vans.</h1>
                    <h4 className="subtitle">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h4>
                    <button className="home--button">Find your van</button>
                </div>
            </main>
        </div>
    )
}
