import React from 'react'
import NavBar from './NavBar'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-4 bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavBar />
                </div>
            </div>
        </nav>
    )
}
