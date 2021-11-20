import { POST_USER } from "../actions/types.js"

const initialState = {
    users: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case POST_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        default:
            return state;
    }
}