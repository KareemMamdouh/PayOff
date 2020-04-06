import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./redux/_helpers/history";
import HandleRes from "./Pages/Components/HandleRes/HandleRes";
import Home from "./Pages/Home/Home";
import SavedAmount from "./Pages/SavedAmount/SavedAmount";
import Personal from "./Pages/Personal/Personal";
import Financial from "./Pages/Financial/Financial";
import Work from "./Pages/Work/Work";
import AcoountReady from "./Pages/AcoountReady/AcoountReady";
import Calculate from "./Pages/Calculate/Calculate";
import Appointment from "./Pages/Appointment/Appointment";


class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      window.scrollTo(0, 0)
    });
  }
  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div >
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/SavedAmount" component={SavedAmount}></Route>
              <Route exact path="/PersonalInformation" component={Personal}></Route>
              <Route exact path="/FinancialInformation" component={Financial}></Route>
              <Route exact path="/Work" component={Work}></Route>
              <Route exact path="/AcoountReady" component={AcoountReady}></Route>
              <Route exact path="/Calculate" component={Calculate}></Route>
              <Route exact path="/Appointment" component={Appointment}></Route>

              
            </Switch>
          </div>
          {(this.props.successMessageAR ? <HandleRes title={this.props.successMessageAR} stylecss="alert-success" /> : '')}
          {(this.props.errorMessageBackEnd ? <HandleRes title={this.props.errorMessageBackEnd} stylecss="alert-danger" /> : '')}
          {(this.props.errorGlobal ? <HandleRes title="sorry there was a problem with your request" stylecss="alert-danger" /> : '')}
        </Router>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessageBackEnd: state.Errors.errorMessageBackEnd ? state.Errors.errorMessageBackEnd : "",
    errorGlobal: state.Errors.errorGlobal ? state.Errors.errorGlobal : "",
    successMessageAR: state.User.successMessageAR ? state.User.successMessageAR : "",
  };
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(App);

