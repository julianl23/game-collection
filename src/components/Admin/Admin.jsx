import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class Admin extends Component {
  render() {
    return (
      <div className={cn('cp-admin')}>
        <h1>Admin Page</h1>

        <p>
          Here we will be able to:
          <ul>
            <li>Manage users</li>
            <li>CRUD on the possible types of consoles</li>
            <li>CRUD on individual games</li>
            <li>CRUD on individual lists</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Admin;
