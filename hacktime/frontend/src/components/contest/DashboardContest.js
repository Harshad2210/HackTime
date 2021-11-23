import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getContests } from '../../actions/leads';
import PropTypes from 'prop-types';
import Contest from './Contest';


const DashboardContest = ({ getContests, contests }) => {

    useEffect(() => {
        getContests();
    }, [])

    return (
        <Fragment>
            {
                contests.map(
                    contest => {
                        return <Contest key={contest.id} contest={contest} />
                    }
                )
            }
        </Fragment>
    )
}

DashboardContest.propTypes = {
    contests: PropTypes.array.isRequired,
    getContests: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
    {
        contests: state.contests.contests
    }
)

export default connect(mapStateToProps, { getContests })(DashboardContest);


// export default DashboardContest


