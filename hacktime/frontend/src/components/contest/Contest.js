import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateDetailsContest } from '../../actions/details';
import PropTypes from 'prop-types';



const Contest = ({ contest, updateDetailsContest }) => {

    const days_between = (date1, date2) => {

        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;

        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);

        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
    }
    const d = new Date();
    const dl = new Date(contest.date);
    console.log(dl);
    let db = days_between(dl, d);

    const [cur_votes, setCur_votes] = useState(contest.votes);
    const [hasVoted, setVoted] = useState(0);

    // useEffect(() => {
    // });

    const onClick = () => {
        console.log("in");
        // cur_votes = cur_votes + 1;
        console.log(cur_votes);
        if (hasVoted == 0) {
            setCur_votes(cur_votes + 1);
            setVoted(1);
        }
    }



    return (



        <div className=" container m-3 ml-1"  >
            <div className="card" style={{ width: "80%" }}>
                <div className="card-header">
                    <a href={contest.link}> Register</a>
                </div>
                <div className="card-body w-90">
                    <h5 className="card-title">{contest.details}</h5>
                    <p className="card-text">{db} days left</p>
                    <div class="container">

                        <Link onClick={() => updateDetailsContest(contest)} to="/details" className="btn btn-primary">
                            Details
                        </Link>
                        <button type='submit' className="btn  btn-outline-primary btn-sm ms-3" onClick={onClick}  >
                            Upvote
                        </button>
                        <button type='submit' className="btn btn-outline-secondary btn-sm "   >
                            {cur_votes}
                        </button>
                    </div>

                    {/* <a href="#" className="btn btn-primary">Comment</a> */}
                </div>
            </div>
        </div>
    )
}


Contest.propTypes = ({
    updateDetailsContest: PropTypes.func.isRequired,
    contest: PropTypes.object.isRequired,
});

// export default Contest
export default connect(null, { updateDetailsContest })(Contest);
