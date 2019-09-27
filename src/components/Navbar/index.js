// Dependencies.
import React from "react";
import { Link } from 'react-router-dom';


// Navbar JSX.
function Navbar() {
  return (
    // Navbar Container
    <nav class="navbar navbar-expand-lg text-white bg-light shadow-md">
      <a class="navbar-brand" href="/"><h1 className="animated bounce" id="locoLogo">LocoBounce</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" href="#" to="/">Home</Link>  <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" href="#" to="/login">Login</Link>  <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" href="#" to="/register">Register</Link>  <span class="sr-only">(current)</span>
          </li>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropWidgets" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" onclick="tabs(event, 'LifeQaulityScore')">Life Quality Score</button>
              <button class="dropdown-item" type="button">Cost of Living</button>
              <button class="dropdown-item" type="button">Job Salary Calculator</button>
              <button class="dropdown-item" type="button">Safety</button>
              <button class="dropdown-item" type="button">Education</button>
              <button class="dropdown-item" type="button">LGBT Rights</button>
              <button class="dropdown-item" type="button">Outdoor</button>
              <button class="dropdown-item" type="button">Startups Scene</button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

// Do Export.
export default Navbar;