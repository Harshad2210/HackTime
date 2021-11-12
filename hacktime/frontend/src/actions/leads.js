import axios from "axios";
import { createMessage } from "./messages";
import { GET_LEADS, DELETE_LEADS, POST_LEADS, GET_ERRORS } from "./types";

export const getLeads = () => dispatch => {
    axios
        .get("/api/leads/")
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

export const deletetLeads = (id) => dispatch => {
    axios
        .delete(`/api/leads/${id}`)
        .then(res => {

            dispatch(createMessage({ deleteLead: "Lead deleted" }));

            dispatch({
                type: DELETE_LEADS,
                payload: id
            });
        })
        .catch(err => console.log(err))
};

export const postLeads = (lead) => dispatch => {
    axios
        .post("/api/leads/", lead)
        .then(res => {

            dispatch(createMessage({ postLead: "Lead Added" }));

            dispatch({
                type: POST_LEADS,
                payload: res.data
            });
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: error
            });
        })
};