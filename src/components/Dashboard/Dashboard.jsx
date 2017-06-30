import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  componentDidMount() {
    axios.get('/api/game/12345')
      .then((res) => {
        console.log(res);
        this.setState({
          title: res.data.game ? res.data.game.title : null
        });
      });
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
        <p>
          Test game title: { this.state.title }
        </p>
        <p>
          <Link to="/linktest">Here's a link to this same thing</Link>
        </p>
      </div>
    );
  }
}

export default Dashboard;
