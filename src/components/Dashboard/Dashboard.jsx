import axios from 'axios';
import React, { Component } from 'react';
import cn from 'classnames';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  componentDidMount() {
    axios.get('/api/games/12345')
      .then((res) => {
        console.log(res);
        this.setState({
          title: res.game ? res.game.title : null
        });
      });
  }

  render() {
    return (
      <div classNames={cn('cp-dashboard')}>
        <h1>Dashboard</h1>
        <p>
          Welcome to your dashboard. Here you will see an at-a-glance look at your
          game collection. You'll be able to view stats and quickly get to the pages
          you need to create, manage, and expand your game collection.
        </p>
        <p>
          Test game title: { this.state.title }
        </p>
      </div>
    );
  }
}

export default Dashboard;
