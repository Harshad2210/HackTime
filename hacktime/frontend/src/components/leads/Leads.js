import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeads, deletetLeads } from '../../actions/leads';
import PropTypes from 'prop-types';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deletetLeads: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.getLeads();

    }
    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(
                            lead => (
                                <tr key={lead.id}>
                                    <td> {lead.id} </td>
                                    <td> {lead.name} </td>
                                    <td> {lead.email} </td>
                                    <td> {lead.message} </td>
                                    <td> <button onClick={() => this.props.deletetLeads(lead.id)} className="btn btn-danger btn-sm">Delete</button> </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => (
    {
        leads: state.leads.leads
    }
)

export default connect(mapStateToProps, { getLeads, deletetLeads })(Leads);
