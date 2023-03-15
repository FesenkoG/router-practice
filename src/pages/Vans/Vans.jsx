import React from "react";
import Footer from "../../elements/Footer/Footer";
import NavigationBar from "../../elements/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import './Vans.css'

import '../../server'

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans/")
            .then((response) => response.json())
            .then((data) => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <Link to={`/vans/${van.id}`}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} alt="" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))

    return (
        <div className="vans--container">
            <NavigationBar />
            <div className="van-list-container">
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
            <Footer />
        </div>
    )
}