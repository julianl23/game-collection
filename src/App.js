import React, { Component } from 'react';
import { BrowserRouter as Router, Link , Route, Switch } from 'react-router-dom';
import AddGame from './components/AddGame';
import Admin from './components/Admin';
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
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/linktest" component={Dashboard} />

            {/* Game  */}
            <Route exact path="/game/add" component={AddGame} />

            {/* Admin */}
            <Route exact path="/admin" component={Admin} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
