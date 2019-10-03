// Dependencies.
import React from 'react';
import { Consumer } from '../components/AppProvider';

// Custom Login Failed Message.
const FlashMessage = () => <Consumer>
    {/* Prepare the Error State For Invalid Data Requests. */}
    {({ state, ...context }) => state.message && <small className="flash-message">
        {/* Alert the User That Their Data Request Was Invalid. */}
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {/* Custom User OR Password Fail Message  */}
            <strong className="font-weight-bold"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Login Failed: </strong> {state.message = "You have entered invalid credentials, please check to make sure you've entered the correct username and password."}
            {/* Custom Fail 'X' Close Button */}
            <button type="button" id="btnRemoveAlert" className="float-right text-muted" onClick={() => context.clearMessage()}>&times;</button>
        </div>
    </small>}
</Consumer>;

// Do Export.
export default FlashMessage;