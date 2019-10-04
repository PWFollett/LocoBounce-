// Dependencies.
import React from 'react';
// import { Route } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { Consumer } from '../AppProvider';
import './style.css';

const Navbar = props => {
  const handleLogout = context => {
    auth.logout();
    context.destroySession();
    props.history.push('/signedOut');
  };
  return <Consumer>
    {({ state, ...context }) => (
      state.currentUser ?
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a onClick={() => handleLogout(context)}>Logout</a></li>
        </ul>
        :
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* Navbar Brand */}
            <Link className="navbar-brand" to="/">
              <h1 className="animated bounce" id="locoLogo">
                <img className="hvr-bounce-in" src="https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoLogo.png?raw=true" alt="locoLogo.png" />
              </h1>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                {/* Getting Started*/}
                <li id="nav-item" className="active">
                  <Link className="nav-link text-white" href="#" to="/login"><i class="fa fa-star" aria-hidden="true"></i> Getting Started</Link>  <span className="sr-only">(current)</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )}
  </Consumer>
};
export default withRouter(Navbar);


// // Navbar Container.
// <nav className="navbar navbar-expand-lg text-white bg-light shadow-md">
//   {/* Navbar Brand */}
//   <a className="navbar-brand" href="/">
//     <h1 className="animated bounce" id="locoLogo">
//       <img src="https://github.com/PWFollett/LocoBounce-/blob/master/src/assets/images/locoLogo.png?raw=true" alt="locoLogo.png" />
//     </h1>
//   </a>
//   {/* Mobile Navigation Link Collapse */}
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   {/* Navbar Navigation (And Collapse Container) */}
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       {/* Homepage Route */}
//       <li className="nav-item active">
//         <Link id="homeLink" className="nav-link" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>  <span className="sr-only">(current)</span>
//       </li>
//     </ul>
//     {/* Sign In / Register Routing */}
//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item">
//         <Link className="nav-link loginlink" data-toggle="modal" data-target="#loginRegister" to="/login">
//           <i className="faLoginLink fa fa-user" aria-hidden="true"></i> Sign In
//             </Link>
//       </li>
//     </ul>
//   </div>

//   {/* Sign In / Register Modal */}
//   <div className="modal fade text-dark" id="loginRegister" tabIndex="-1" role="dialog" aria-hidden="true">
//     {/* Modal Document Container */}
//     <div className="modal-dialog modal-dialog-centered" role="document">
//       <div className="modal-content">
//         {/* Modal Register / Login TABS */}
//         <ul className="nav nav-tabs" id="myTab" role="tablist">
//           <li className="nav-item active">
//             <Link className="nav-link" href="#" to="/login">Sign In</Link>  <span className="sr-only">(current)</span>
//           </li>
//           {/* Sign Up / Register */}
//           <li className="nav-item active">
//             <Link className="nav-link" href="#" to="/signup">Register An Account</Link>  <span className="sr-only">(current)</span>
//           </li>
//         </ul>
//         {/* Modal Body Container */}
//         <div className="modal-body">
//           {/* Modal Tabs: */}
//           <div className="tab-content" id="myTabContent">
//             {/* Login Form */}
//             <div className="tab-pane fade show active" id="home" role="tabpanel">
//               <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
//             </div>
//           </div>
//           <div className="tab-content" id="myTabContent">
//             {/* Registration Form */}
//             <div className="tab-pane fade show active" id="home" role="tabpanel">
//               <Route path="/signup" component={RegistrationForm} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>




























