import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { postLeads } from '../../actions/leads';
import PropTypes from 'prop-types';


export class Form extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    };

    static propTypes = {
        postLeads: PropTypes.func.isRequired
    };


    onchange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
        console.log(event.target.value);
    }

    onsubmit = event => {
        event.preventDefault();
        const { name, email, message } = this.state;
        const lead = {
            name: name,
            email: email,
            message: message
        };
        console.log(lead);

        this.props.postLeads(lead);
        console.log("Submit cool");
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="card card-body mb-4 mt-4">
                <form onSubmit={this.onsubmit} >
                    <h2>Lead Form</h2>
                    <div className="mb-3 row form-group ">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input name='name' onChange={this.onchange} value={name} type="text" className="form-control" id="inputName" />
                        </div>
                    </div>
                    <div className="mb-3 row form-group">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input name='email' value={email} onChange={this.onchange} type="email" className="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row form-group ">
                        <label className="col-sm-2 form-label">Message</label>
                        <div className="col-sm-10">
                            <textarea name='message' value={message} onChange={this.onchange} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row text-center">

                        <div className="form-group">
                            <button type='submit' className="btn btn-primary ">
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}



export default connect(null, { postLeads })(Form);
