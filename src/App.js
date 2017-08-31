import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEditGame from './components/Game/AddEditGame';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Game from './components/Game/Game';
import MainNavigation from './components/MainNavigation';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavigation />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/linktest" component={Dashboard} />

              {/* Game  */}
              <Route exact path="/game/add" component={AddEditGame} />
              <Route exact path="/game/edit/:id" component={AddEditGame} />
              <Route exact path="/game/:id" component={Game} />

              {/* Admin */}
              <Route exact path="/admin" component={Admin} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
