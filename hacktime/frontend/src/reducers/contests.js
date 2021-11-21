import { GET_CONTESTS } from "../actions/types.js"

const initialState = {
    contests: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTESTS:
            return {
                ...state,
                contests: action.payload
            }

        default:
            return state;
    }
}