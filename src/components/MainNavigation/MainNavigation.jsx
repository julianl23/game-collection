import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './MainNavigation.css';

class MainNavigation extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    axios.get('/api/session')
      .then((res) => {
        if (res.data && res.data.entities.user) {
          console.log(res.data.entities.user);
          this.setState({
            user: res.data.entities.user
          });
        }
      })
      .catch(() => {})
  }

  renderLoggedInContent = () => {
    const user = this.state.user;
    if (!user) {
      return;
    }

    return (
      <span className={cn('logged-in')}>
        <Link to="/" className={cn('admin-link')}>{ user.username }</Link>
        <Link to="/admin" className={cn('admin-link')}>Admin</Link>
        <Link to="/">Log out</Link>
      </span>
    );
  }

  renderLoggedOutContent() {
    return (
      <span className={cn('logged-out')}>
        <Link to="/login" className={cn('admin-link')}>Log in</Link>
        /
        <Link to="/register" className={cn('admin-link')}>Register</Link>
      </span>
    );
  }
  
  render() {
    return (
      <nav className={cn('main-nav')}>
        <Link to="/">Home</Link>
        { this.state.user ? this.renderLoggedInContent() : this.renderLoggedOutContent }
      </nav>
    );
  }
};

export default MainNavigation;
