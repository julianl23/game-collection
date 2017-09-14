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

  renderLoggedInUser = () => {
    const user = this.state.user;
    if (!user) {
      return;
    }

    return (
      <Link to="/" className={cn('admin-link')}>{ user.username }</Link>
    );
  }
  
  render() {
    return (
      <nav className={cn('main-nav')}>
        <Link to="/">Home</Link>
        { this.renderLoggedInUser() }
        <Link to="/admin" className={cn('admin-link')}>Admin</Link>
      </nav>
    );
  }
};

export default MainNavigation;
