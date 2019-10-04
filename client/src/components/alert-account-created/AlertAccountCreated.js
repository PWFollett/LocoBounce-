// Dependencies.
import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="content" class="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Account Created: </strong> Proceed to the members version of LocoBounce <Link to="/dashboard">here</Link>!

                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}