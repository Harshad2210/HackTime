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
    const varToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MDc0Nzc2LCJpYXQiOjE2Mzg5MDE5NzYsImp0aSI6IjYwOTQ2NjJkNmY1YzRiN2ViYjY5ZDYwYTQ1N2I4NDk5IiwidXNlcl9pZCI6MTV9.PvLHsMcqaGN-dufy0vG75pEypgYXj2R6V4cXL8rKwho"
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