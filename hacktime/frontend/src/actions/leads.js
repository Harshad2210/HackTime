import axios from "axios";
import { createMessage } from "./messages";
import { GET_LEADS, DELETE_LEADS, POST_LEADS, GET_ERRORS, POST_USER, GET_CONTESTS } from "./types";


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
            // createMessage({ postLead: "Lead Added" });
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



export const postUser = (user) => dispatch => {
    axios
        .post("/api/user/", user)
        .then(res => {


            dispatch(createMessage({ postUser: "New User Created" }));
            // createMessage({ postLead: "Lead Added" });

            dispatch({
                type: POST_USER,
                payload: res.data
            });
        })
        .catch(err => {
            // const error = {
            //     msg: err.response.data,
            //     status: err.response.status
            // };
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: error
            // });\
            console.log(err);
        })
};

export const postLogin = (user) => dispatch => {
    axios
        .post("/api/token/", user)
        .then(res => {
            console.log(res);
            if (res.status === 200)
                dispatch(createMessage({ postLogin: "User login succefully" }));
            else
                dispatch(createMessage({ postLogin: "User login unsucceful" }));

            // dispatch(createMessage({ postLoginFail: "Login failed,please check your username & password" }));

        })
        .catch(err => {
            console.log(err);
        })
};

export const getContests = () => dispatch => {
    axios
        .get("/api/contest/")
        .then(res => {
            dispatch({
                type: GET_CONTESTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};