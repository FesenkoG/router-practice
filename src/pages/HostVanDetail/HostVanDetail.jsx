import React from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import "../../server.js"
import './HostVanDetail.css'

export default function HostVanDetail() {
    const vanId = useParams().id
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${vanId}`)
            .then((res) => res.json())
            .then(data => setVan(data.vans[0]))
    }, [vanId])

    return (
        <div className="host-van-detail--container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {
                van ?
                <div className="host-van-detail--content">
                    <div className="host-van-detail--info">
                        <img className="host-van-detail--image" src={van.imageUrl} />
                        <span>
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h1>{van.name}</h1>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                        </span>
                    </div>
                    <div className="host-van-detail-nav">
                        <NavLink to=".">Details</NavLink>
                        <NavLink to="pricing">Pricing</NavLink>
                        <NavLink to="photos">Photos</NavLink>
                    </div>
                    <Outlet context={{van}} />
                </div> : <h1>Loading...</h1>
            }
            
        </div>
    )
}