import React, { Component } from 'react';
import cn from 'classnames';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  render() {
    return (
      <div className={cn('cp-dashboard')}>
        <h1>Dashboard</h1>
        <p>
          Welcome to your dashboard. Here you will see an at-a-glance look at your
          game collection. You'll be able to view stats and quickly get to the pages
          you need to create, manage, and expand your game collection.
        </p>
      </div>
    );
  }
}

export default Dashboard;
