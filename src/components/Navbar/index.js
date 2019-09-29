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
    <nav className="navbar navbar-expand-lg text-white bg-light shadow-md">
      {/* Navbar Brand */}
      <a className="navbar-brand" href="/">
        <h1 className="animated bounce" id="locoLogo">
          <img src="https://github.com/PWFollett/LocoBounce-/blob/master/src/assets/images/locoLogo.png?raw=true" alt="locoLogo.png" />
        </h1>
      </a>
      {/* Mobile Navigation Link Collapse */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navbar Navigation (And Collapse Container) */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Homepage Route */}
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>  <span className="sr-only">(current)</span>
          </li>
          {/* Registration Page Route */}
          <li className="nav-item active">
            <Link className="nav-link" to="/register">Register</Link>  <span className="sr-only">(current)</span>
          </li>
          {/* Widget Dropdown Menu */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropWidgets" data-toggle="dropdown">
              Tools
            </button>
            <div className="dropdown-menu">
              {/* All Widget Click Events */}
              <Link className="dropdown-item" to="/Qaulity">Life Quality Score</Link>
              <Link className="dropdown-item" to="/Cost">Cost of Living</Link>
              <Link className="dropdown-item" to="/Salaries">Job Salary Calculator</Link>
              <Link className="dropdown-item" to="/Safety">Safety</Link>
              <Link className="dropdown-item" to="/Education">Education</Link>
              <Link className="dropdown-item" to="/Lgbt">LGBT Rights</Link>
              <Link className="dropdown-item" to="/Startups">Startups Scene</Link>
            </div>
          </div>
        </ul>
        {/* Sign In / Register Routing */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link loginlink" data-toggle="modal" data-target="#loginRegister" href="#" to="/login">
              <i className="faLoginLink fa fa-user" aria-hidden="true"></i> Sign In
            </Link>
          </li>
        </ul>
      </div>

      {/* Sign In / Register Modal */}
      <div className="modal fade text-dark" id="loginRegister" tabIndex="-1" role="dialog" aria-hidden="true">
        {/* Modal Document Container */}
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Modal Register / Login TABS */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item active">
                <Link className="nav-link" href="#" to="/login">Sign In</Link>  <span className="sr-only">(current)</span>
              </li>
              {/* Sign Up / Register */}
              <li className="nav-item active">
                <Link className="nav-link" href="#" to="/register">Register An Account</Link>  <span className="sr-only">(current)</span>
              </li>
            </ul>
            {/* Modal Body Container */}
            <div className="modal-body">
              {/* Modal Tabs: */}
              <div className="tab-content" id="myTabContent">
                {/* Login Form */}
                <div className="tab-pane fade show active" id="home" role="tabpanel">
                  <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
                </div>
              </div>
              <div className="tab-content" id="myTabContent">
                {/* Registration Form */}
                <div className="tab-pane fade show active" id="home" role="tabpanel">
                  <Route path="/register" component={RegistrationForm} />
                </div>
              </div>
            </div>
            {/* Modal Contols: */}
            <div className="modal-footer">
              {/* Close Modal */}
              <button type="button" className="btn btn-default border" data-dismiss="modal">Close</button>
              {/* Sign In (Must Be Authenticated!!!!) */}
              <button type="button" className="btn btn-info"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Do Export.
export default Navbar;