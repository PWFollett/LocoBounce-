// Dependencies.
import React from 'react';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="content" class="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Session Details: </strong> You have been logged out either because you manaully
                    logged out or your session has expired. You are now being redirected back to the
                    landing page.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}