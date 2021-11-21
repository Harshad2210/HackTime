import { combineReducers } from "redux";
import leads from "./leads"
import errors from "./errors";
import messages from "./messages";
import contests from "./contests";


export default combineReducers({
    leads,
    errors,
    messages,
    contests,
});