import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getComment } from '../../actions/comments'

const Comment = ({ commentText }) => {

    return (
        <div className="be-comment">

            <div className="be-comment-content">

                <hr />
                <p className="be-comment-text">
                    {commentText}
                </p>
            </div>
        </div>
    )
}

export default Comment;

// Comment.propTypes = ({
//     getComment: PropTypes.func.isRequired,
//     comments: PropTypes.object.isRequired
// });

// const mapStateToProps = (state) => {
//     console.log("Here is from comment section");
//     return (
//         {
//             comments: state.comments.comments
//         }
//     );
// };
// export default connect(mapStateToProps, { getComment })(Comment)

