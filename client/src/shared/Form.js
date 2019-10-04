// Dependencies.
import React, {
    Component,
    createRef
} from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { auth } from '../firebase';

class Form extends Component {
    constructor(props) {
        super(props);

        this.email = createRef();
        this.password = createRef();
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSuccess() {
        this.resetForm();
        this.props.onSuccess && this.props.onSuccess();
    }

    handleErrors(reason) {
        this.props.onError && this.props.onError(reason);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {
            email,
            password,
            props: { action }
        } = this;

        auth.userSession(
            action,
            email.current.value,
            password.current.value
        ).then(this.handleSuccess).catch(this.handleErrors);
    }

    resetForm() {
        if (!this.email.current || !this.password.current) { return }
        const { email, password } = Form.defaultProps;
        this.email.current.value = email;
        this.password.current.value = password;
    }

    render() {
        return (
            // Sign In OR Sign Up Form.
            <div className="animated fadeIn slow card border-nitany">
                {/* Card Container */}
                <div className="card-body">
                    {/* Tabs Container */}
                    <ul class="nav nav-tabs">
                        {/* Sign In Tab */}
                        <li class="nav-item">
                            <Link className="nav-link text-white" href="#" to="/login"><i class="fa fa-key" aria-hidden="true"></i> Sign In</Link>
                        </li>
                        {/* Sign Up / Register Tab */}
                        <li class="nav-item">
                            <Link className="nav-link" href="#" to="/signup"><i class="fa fa-users" aria-hidden="true"></i> Register An Account</Link>
                        </li>
                    </ul>
                    {/* Form Render Container */}
                    <div class="tab-content mt-3">
                        {/* Sign In Render Container */}
                        <div class="tab-pane fade show active" id="home">
                            <form onSubmit={this.handleSubmit}>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-nitany">@</span>
                                    </div>
                                    <input name="name" type="email" ref={this.email} class="form-control" placeholder="example@email.com" />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-nitany"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                    </div>
                                    <input name="password" type="password" autoComplete="none" ref={this.password} class="form-control" placeholder="••••••••••••••" />
                                </div>
                                <hr />
                                <button className="btn btn-nitany float-right" type="submit">Sign In</button>

                                <div class="form-group form-check float-left mt-2">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                            </form>
                        </div>
                        {/* Sign Up / Register Render */}
                        <div class="tab-pane fade" id="profile">...</div>
                    </div>
                </div>
            </div>
        )
    }
}

Form.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
}

Form.defaultProps = {
    errors: '',
    email: '',
    password: ''
}

export default Form;