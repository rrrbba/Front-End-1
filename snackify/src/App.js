import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import {
  HomePage,
  NavBar,
  PrivateRoute,
  LogIn,
  CompSelect,
  Register,
  CompanyData,
  EmployeeSnack,
  CompEmp,
  FormikRegisterFormEmp,
  RegisterOrg,
  SnackList,
} from './Components';

const App = () => {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
      
      <SnackList />
        
          <Route exact path='/' component={HomePage} />
          <Route exact path='/CompanyOrEmployee' component={CompEmp} />
          <Route exact path='/CompanyLogIn' component={LogIn} />
          <Route exact path='/EmployeeLogIn' component={LogIn} />
          <Route exact path='/Register' component={FormikRegisterFormEmp} />
          <PrivateRoute exact path='/Company-Select' component={CompSelect} />
          <PrivateRoute exact path='/CompanyData' component={CompanyData} />
          <PrivateRoute exact path='/EmployeeSnack' component={EmployeeSnack} />
        
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
