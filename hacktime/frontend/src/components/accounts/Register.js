import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMessage } from '../../actions/messages';
import { postUser } from '../../actions/leads';
// import { register } from '../../actions/auth';

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
    };

    // static propTypes = {
    //     register: PropTypes.func.isRequired,
    //     isAuthenticated: PropTypes.bool,
    // };

    static propTypes = {
        postUser: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, password2 } = this.state;
        if (password !== password2) {
            console.log("Password do not match in this");
            // this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
            const newUser = {
                name,
                password,
                email,
            };
            this.props.postUser(newUser);
        }
        console.log("Submit register");
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        // if (this.props.isAuthenticated) {
        //     return <Redirect to="/" />;
        // }
        const { name, email, password, password2 } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.onChange}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
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
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
// });

export default connect(null, { postUser, createMessage })(Register);

// export default connect(mapStateToProps, { register, createMessage })(Register);
