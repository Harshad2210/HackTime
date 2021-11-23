import React from 'react'

const DetailContest = ({ detailsContest }) => {
    const days_between = (date1, date2) => {

        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;

        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);

        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
    }
    const d = new Date();
    const dl = new Date(detailsContest.date);
    console.log(dl);
    let db = days_between(dl, d);

    return (
        <div className=" container m-3 ml-1"  >
            <div className="card" style={{ width: "80%" }}>
                <div className="card-body w-75">
                    <h5 className="card-title">{detailsContest.details}</h5>
                    <p className="card-text">{db} days left</p>
                    <a href={detailsContest.link} className="btn btn-primary"> Register   </a>
                </div>
            </div>
        </div>
    )
}

export default DetailContest
