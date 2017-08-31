import React, { Component } from 'react';
import cn from 'classnames';
import GameList from './GameList';

class Admin extends Component {
  render() {
    return (
      <div className={cn('cp-admin')}>
        <h1>Admin Page</h1>

        <p>Here we will be able to:</p>
        <ul>
          <li>Manage users</li>
          <li>CRUD on the possible types of consoles</li>
          <li>CRUD on individual games</li>
          <GameList />
        </ul>
      </div>
    );
  }
}

export default Admin;
