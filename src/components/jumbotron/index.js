// Dependencies.
import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

// Navbar JSX.
function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="locoLogo">LocoBounce</h1>
                    <p id="brand-description" className="display-5 lead">
                        LocoBounce is a toolbelt for people looking to relocate to a new state or country. It offers a variety of tools and statistics that make the process of relocating anywhere effortless. Whether it’s determining the cost of living, eating, or buying groceries, LocoBounce has you covered. Everything you need is made simple by our smart search functionality, allowing you to select your location, and compare it to your destination. Everything you need to ensure a safe, smart trip away from home, in one simple app!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Do Export.
export default Jumbotron;