import React from "react"
import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar/NavigationBar"
import Footer from "./Footer/Footer"

export default function Layout() {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}