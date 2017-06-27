import React, { Component } from 'react';
import { BrowserRouter as Router, Link , Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <Link to={'/welcome'}>Check out the welcome page</Link> */}
          {/* <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} /> */}
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
