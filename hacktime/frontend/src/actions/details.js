import { createMessage } from "./messages";
import { GET_DETAILS_CONTEST, UPDATE_DETAILS_CONTEST } from "./types";


export const updateDetailsContest = (contest) => dispatch => {

    // dispatch(createMessage({ postLead: "Lead Added" }));
    // createMessage({ postLead: "Lead Added" });
    dispatch({
        type: UPDATE_DETAILS_CONTEST,
        payload: contest
    });

};

// export const getDetailsContest = () => dispatch => {

//     dispatch({
//         type: GET_LEADS,
//         payload: 0
//     });

// };
