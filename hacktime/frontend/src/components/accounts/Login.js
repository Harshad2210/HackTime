import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postLogin } from '../../actions/leads';
// import { login } from '../../actions/auth';
import { createMessage } from '../../actions/messages';


export class Login extends Component {
    state = {
        username: '',
        password: '',
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.postLogin(this.state);
        console.log("Submit Login");
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        // if (this.props.isAuthenticated) {
        //     return <Redirect to="/" />;
        // }
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

Comment.propTypes = ({
    postLogin: PropTypes.func.isRequired,
});

export default connect(null, { postLogin, createMessage })(Login);
