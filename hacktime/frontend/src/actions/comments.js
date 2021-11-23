import { createMessage } from "./messages";
import { GET_COMMENTS, POST_COMMENT, GET_ERRORS } from "./types";
import axios from "axios";



export const getComment = () => dispatch => {
    axios
        .get("/api/comment/")
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

export const postComment = (comment) => dispatch => {
    const varToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3ODc0OTI5LCJpYXQiOjE2Mzc3MDIxMjksImp0aSI6ImM2YTg0N2ZiYTg5NDQwNWFhZTZkZDA1N2FiMjNkYmQ1IiwidXNlcl9pZCI6NH0.-TU2uoZlZx2HfKX07hjZLW6yJk8t6WFKe9j3GffVDGA";

    axios
        .post("/api/comment/", comment, {
            headers: {
                Authorization: 'Bearer ' + varToken
            }
        })
        .then(res => {

            dispatch(createMessage({ postComment: "Comment Added" }));
            // createMessage({ postLead: "Lead Added" });
            dispatch({
                type: POST_COMMENT,
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