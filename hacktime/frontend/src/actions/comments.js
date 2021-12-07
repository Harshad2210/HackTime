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
    const varToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MDc4MTI1LCJpYXQiOjE2Mzg5MDUzMjUsImp0aSI6IjVkNzI1YTAxN2M1MTQzOTE5ZjFlYWViN2M4MzdjNGE5IiwidXNlcl9pZCI6MTZ9.Olu0viLiQHh4S3yBHiXrrmyahWcndKq880QDgARrWQ8"
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