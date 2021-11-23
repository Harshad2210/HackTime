import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contest from './Contest';
import { getComment, postComment } from '../../actions/comments';
import Comment from './Comment';
import DetailContest from './DetailContest';

const Details = ({ detailsContest, postComment, getComment, comments }) => {


    const [commentText, setCommentText] = useState('');

    const onChange = event => {
        setCommentText(
            event.target.value
        );
        console.log(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();

        const comment = {
            commentText: commentText,
            parentContest: detailsContest.id,
        };

        postComment(comment);

        setCommentText('');

        console.log("Submitted Comment");
    }

    // console.log("Here is update...");
    useEffect(() => {
        getComment();
    }, [comments.length]);

    const tempComment = comments.filter(
        (comment) => {
            return comment.parentContest === detailsContest.id;
        }
    );
    // console.log(detailsContest.id);
    // console.log(comments);
    // console.log(tempComment);
    console.log(commentText);

    return (


        <div className="container">
            <DetailContest detailsContest={detailsContest} />

            {/* <Contest contest={detailsContest} /> */}
            <div className="be-comment-block">
                <h3 className="comments-title">Comments</h3>

                {tempComment.map((comment) => {
                    return <Comment key={comment.commentText} commentText={comment.commentText} />
                })}


                <form onSubmit={onSubmit} className="form-block">
                    <div className="row">
                        <div className="mb-3 row form-group ">
                            <hr />
                            <label className="col-sm-2 form-label">Add your comment</label>
                            <div className="col-sm-10">
                                <textarea name='commentText' value={commentText} onChange={onChange} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                        </div>
                        {/* <a className="btn btn-primary pull-right">submit</a> */}
                        <div className="container d-flex justify-content-center">
                            <button type='submit' className="btn btn-primary  "  >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log("Here is from details contest");
    return (
        {
            detailsContest: state.detailsContest.detailsContest,
            comments: state.comments.comments,
        }
    );
};

Details.propTypes = ({
    detailsContest: PropTypes.object.isRequired,
    postComment: PropTypes.func.isRequired,
    getComment: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { postComment, getComment })(Details);

