import { GET_LEADS, DELETE_LEADS, POST_LEADS } from "../actions/types.js"

const initialState = {
    leads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }

        case DELETE_LEADS:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }

        case POST_LEADS:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            };

        default:
            return state;
    }
}