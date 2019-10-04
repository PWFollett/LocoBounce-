// Dependencies.
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                {/* LocoBounce Toolbelt */}
                <div className="container">
                    <div id="toolbelt" className="card-deck text-center">
                        <div className="card mb-4 border-primary shadow-sm">
                            {/* LocoBounce Toolbelt Header */}
                            <div className="card-header">
                                <h4 className="text-primary">LocoBounce Toolbelt <i className="fa fa-wrench" aria-hidden="true"></i></h4>
                            </div>
                            {/* LocoBounce Toolbelt Context */}
                            <p className="card-text p-2 text-primary">
                                Explore a diverse dataset of tools that help you with your move!
                                Simply click on the dropdown menu below to start searching for
                                everything you need to move, all in one place.
                            </p>

                            {/* Widget Dropdown Menu List Container */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {/* Widget Dropdown Menu */}
                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button" id="widgetSelector" data-toggle="dropdown">
                                            Tools
                                           </button>
                                        <div className="dropdown-menu">
                                            {/* All Widget Click Events */}

                                            <a href="#section2"></a><Link className="dropdown-item" to="/Qaulity">Life Quality Score</Link>

                                            <Link className="dropdown-item" to="/Cost">Cost of Living</Link>

                                            <Link className="dropdown-item" to="/Salaries">Job Salary Calculator</Link>

                                            <Link className="dropdown-item" to="/Safety">Safety</Link>

                                            <Link className="dropdown-item" to="/Education">Education</Link>

                                            <Link className="dropdown-item" to="/Lgbt">LGBT Rights</Link>

                                            <Link className="dropdown-item" to="/Startups">Startups Scene</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Search Function Card */}
                        <div className="card mb-4 border-success shadow-sm">
                            {/* Search Function Header */}
                            <div className="card-header">
                                <h4 className="text-success">LocoBounce User Survey <i className="fa fa-search" aria-hidden="true"></i></h4>
                            </div>
                            {/* Search Function Context */}
                            <p className="card-text p-2 text-success">
                                LocoBounce wants to know what country you're from. This way, we can get to know our users and better tailer our default toolbelt locations to best match our users. Simply type the name of your country into the box below. We'd greatly appreciate your feedback!
                            </p>
                            {/* Input Box (For Searching, Obviously) */}
                            <div className="container">
                                <form method="POST" action="/survey">
                                    <input type="text" name="userLocation" className="form-control mb-4" placeholder="Pittsburgh" />
                                    <input type="submit" className="press press-teal text-white m-2" value="Submit Feedback" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}