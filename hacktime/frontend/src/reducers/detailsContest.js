import { GET_DETAILS_CONTEST, UPDATE_DETAILS_CONTEST } from "../actions/types.js"

const initialState = {
    detailsContest: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_DETAILS_CONTEST:
            return {
                ...state,
                detailsContest: action.payload
            }

        default:
            return state;
    }
}