import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from './Components/HomePage';
import CompEmp from './Components/CompEmp';
import './App.css';
import NavBar from './Components/NavBar';
import CompanyLogIn from './Components/CompanyLogIn';
import EmployeeLogIn from './Components/EmployeeLogIn';
import CompSelect from './Components/EmployeeCompSelect';
import PrivateRoute from './Components/PrivateRoute';
import Register from './Components/Register';
import CompanyData from './Components/CompanyData';
import EmployeeSnack from './Components/EmployeeSnack';

const App = () => {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        {/* <Switch> */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/CompanyOrEmployee' component={CompEmp} />
          <Route exact path='/CompanyLogIn' component={CompanyLogIn} />
          <Route exact path='/EmployeeLogIn' component={EmployeeLogIn} />
          <Route exact path='/Register' component={Register} />
          <PrivateRoute exact path='/Company-Select' component={CompSelect} />
          <PrivateRoute exact path='/CompanyData' component={CompanyData} />
          <PrivateRoute exact path='/EmployeeSnack' component={EmployeeSnack} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loggedInStatus: state,  
  };
};

export default connect(
  mapStateToProps,
)(App);
