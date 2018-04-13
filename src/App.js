import React from "react";
import RaisedButton from 'material-ui/RaisedButton'; // add
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Route exact path="/" component={Home} />
      <Route path="/success" component={Success} />
    </MuiThemeProvider>
  </Router>
);

const Home = () => (
  <div className="App">
    <div className="App-header">
      <h2>Please sign in</h2>
    </div>
    <h4>Sign in</h4>
    <TextField defaultValue="Please enter your first name"/>
    <br/>
    <TextField defaultValue="Please enter your last name"/>
    <br/>
    <Link to="/success">
      <RaisedButton label="Sign In" />
    </Link>

  </div>
);

const Success = () => (
  
  <div className="App">
    <div className="App-header">
    </div>
    <h2>Success</h2>
    <Link to="/">
       <RaisedButton label="Return Home" />
    </Link>
  </div>
);

export default App;