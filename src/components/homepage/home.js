import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}