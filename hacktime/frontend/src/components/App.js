import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Alerts from "../components/layout/Alerts";
import Login from "../components/accounts/Login";
import Register from "../components/accounts/Register";
import Contest from "./contest/Contest";
import DashboardContest from "./contest/DashboardContest";


const alertOptions = {
    timeout: 3000,
    position: "top center"
}

export class App extends Component {
    render() {
        return (

            <Provider store={store} >
                <AlertProvider template={AlertTemplate} {...alertOptions}  >
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/">
                                        <DashboardContest />
                                    </Route>
                                    <Route exact path="/register">
                                        <Register />
                                    </Route>
                                    <Route exact path="/login">
                                        <Login />
                                    </Route>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

export default App;

// ReactDOM.render(<App />, document.getElementById('app'));


{/* <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
</Switch> */}