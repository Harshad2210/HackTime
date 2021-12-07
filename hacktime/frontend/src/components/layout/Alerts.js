
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux';
// import { withAlert } from 'react-alert'
import PropTypes from 'prop-types'


const Alerts = ({ error, message }) => {
    const alert = useAlert();
    useEffect(() => {
        // alert.show("Here is an alert!");
        // console.log("In the useEffect");
        // console.log(error);
        if (error.msg.name) alert.error(`Name : ${error.msg.name.join()}`); // cause this is an array..we have to convert to string
        if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
        if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);

    }, [error]);

    useEffect(() => {
        // console.log(` Message Deleted  :${message.deleteLead}`);
        if (message.deleteLead)
            alert.success(message.deleteLead);
        if (message.postLead)
            alert.success(message.postLead);
        // if (message.passwordNotMatch)
        //     alert.error(message.passwordNotMatch);
        if (message.postUser)
            alert.success(message.postUser)
        if (message.postLogin)
            alert.success(message.postLogin)
        if (message.postLoginFail)
            alert.error(message.postLogin)
    }, [message])

    return (
        <Fragment>
        </Fragment>
    )
};


const mapStateToProps = (state) => {
    console.log(state);
    return ({
        error: state.errors,
        message: state.messages
    });
};

Alerts.propTypes = ({
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
});

export default connect(mapStateToProps)(Alerts)

// export default Alerts

// export default withAlert()(Alerts)

// import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux';
// import { withAlert } from 'react-alert';
// import PropTypes from 'prop-types'

// export class Alerts extends Component {


// static propTypes = ({
//     error: PropTypes.object.isRequired    
// });

// componentDidMount() {
//     this.props.alert.show("Here is error!");    
// }

// componentDidUpdate(prevProps) {
// const { error, alert } = this.props;    
// if (error != prevProps.error) {
//     alert.error("There is an error");    
// }
// };

//     render() {
//         return (
//             <Fragment>    
//             </Fragment>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     error: state.errors    
// });


// export default withAlert(Alerts)

// export default connect(mapStateToProps)(Alerts)
