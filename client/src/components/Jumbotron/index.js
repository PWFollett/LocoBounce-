// Dependencies.
import React from "react";
import "./style.css";

// Navbar JSX.
function Jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-white">
            Welcome to <span id="loco">Loco</span>{" "}
            <span id="bounce">Bounce</span>!
          </h1>
          <p className="lead text-white">
            LocoBounce is a toolbelt for people looking to relocate to a new
            state or country. We offer a variety of tools and statistics that
            make the process of relocating anywhere effortless. Whether it’s
            determining the cost of living, eating, or buying groceries,
            LocoBounce has you covered. Everything you need is made simple by
            our smart search functionality, allowing you to select your
            location, and compare it to your destination. Everything you need to
            ensure a safe, smart trip away from home, in one simple app!
          </p>
        </div>
      </div>
    </div>
  );
}

// Do Export.
export default Jumbotron;
