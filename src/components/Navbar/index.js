// Dependencies.
import React from "react";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegistrationForm from '../auth/RegistrationForm';
import LoginPage from '../auth/RegistrationForm';
import config from '../../app.config';

// Navbar JSX.
function Navbar() {
  return (
    // Navbar Container.
    <nav class="navbar navbar-expand-lg text-white bg-light shadow-md">
      {/* Navbar Brand */}
      <a class="navbar-brand" href="/"><h1 className="animated bounce" id="locoLogo">LocoBounce</h1></a>
      {/* Mobile Navigation Link Collapse */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      {/* Navbar Navigation (And Collapse Container) */}
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {/* Homepage Route */}
          <li class="nav-item active">
            <Link class="nav-link" href="#" to="/">Home</Link>  <span class="sr-only">(current)</span>
          </li>
          {/* Registration Page Route */}
          <li class="nav-item active">
            <Link class="nav-link" href="#" to="/register">Register</Link>  <span class="sr-only">(current)</span>
          </li>
          {/* Widget Dropdown Menu */}
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropWidgets" data-toggle="dropdown">
              Tools
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" onclick="tabs(event, 'LifeQaulityScore')">Life Quality Score</button>
              {/* All Widget Click Events */}
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
        {/* Sign In / Register Routing */}
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link loginlink" data-toggle="modal" data-target="#loginRegister" href="#" to="/login">
              <i class="faLoginLink fa fa-user" aria-hidden="true"></i> Sign In
            </Link>
          </li>
        </ul>
      </div>

      {/* Sign In / Register Modal */}
      <div class="modal fade text-dark" id="loginRegister" tabindex="-1" role="dialog" aria-hidden="true">
        {/* Modal Document Container */}
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {/* Modal Register / Login TABS */}
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <li class="nav-item active">
                  <Link class="nav-link" href="#" to="/login">Sign In</Link>  <span class="sr-only">(current)</span>
                </li>
              </li>
              {/* Sign Up / Register */}
              <li class="nav-item">
                <li class="nav-item active">
                  <Link class="nav-link" href="#" to="/register">Register An Account</Link>  <span class="sr-only">(current)</span>
                </li>
              </li>
            </ul>
            {/* Modal Body Container */}
            <div class="modal-body">
              {/* Modal Tabs: */}
              <div class="tab-content" id="myTabContent">
                {/* Login Form */}
                <div class="tab-pane fade show active" id="home" role="tabpanel">
                  <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
                </div>
              </div>
              <div class="tab-content" id="myTabContent">
                {/* Registration Form */}
                <div class="tab-pane fade show active" id="home" role="tabpanel">
                  <Route path="/register" component={RegistrationForm} />
                </div>
              </div>
            </div>
            {/* Modal Contols: */}
            <div class="modal-footer">
              {/* Close Modal */}
              <button type="button" class="btn btn-default border" data-dismiss="modal">Close</button>
              {/* Sign In (Must Be Authenticated!!!!) */}
              <button type="button" class="btn btn-info"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Do Export.
export default Navbar;