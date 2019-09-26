import React from "react";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-brand">
        <h1>
          <i className="animated flip brand-icon fa fa-map-marker" aria-hidden="true"></i>
          <img className="animated bounce" src="/assets/images/locoLogo.png" alt="locoLogo.png" />
        </h1>
      </div>
    </div>
  );
}

export default Navbar;