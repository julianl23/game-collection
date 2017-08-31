import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './MainNavigation.css';

class MainNavigation extends Component {
  render() {
    return (
      <nav className={cn('main-nav')}>
        <Link to="/">Home</Link>
        <Link to="/admin" className={cn('admin-link')}>Admin</Link>
      </nav>
    );
  }
};

export default MainNavigation;
