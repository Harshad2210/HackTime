import React, { useEffect } from 'react'

const Contest = ({ contest }) => {

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



    return (
        <div className=" container m-3" >
            <div className="card text-center" >
                <div className="card-header">
                    Codechef
                </div>
                <div className="card-body">
                    <h5 className="card-title"> <a href={contest.link}> {contest.details}  </a> </h5>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <a href="#" className="btn btn-primary">Comment</a>
                </div>
                <div className="card-footer text-muted">
                    {db} days left
                </div>
            </div>
        </div>
    )
}

export default Contest
