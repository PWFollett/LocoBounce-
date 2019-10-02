import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../shared/Form';
import { Consumer } from './AppProvider';
const Login = props => <Consumer>
    {({ state, ...context }) => (
        <div id="tSignIn" className="container">
            <div className="col-md-6">
                <div>
                    <Form
                        action="signIn"
                        onSuccess={() => props.history.push('/dashboard')}
                        onError={({ message }) => context.setMessage(`Login failed: ${message}`)}
                    />
                </div>
            </div>
        </div>
    )}
</Consumer>;

export default withRouter(Login);