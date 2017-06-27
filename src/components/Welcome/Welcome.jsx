import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class Welcome extends Component {
  render() {
    return (
      <div className={cn('cp-welcome')}>
        <p>Welcome to your Game Collection!</p>
        <p>
          Since I don't have login/registration working yet, go straight to <Link to={'/dashboard'}>your dashboard</Link>.
        </p>
      </div>
    );
  }
}

export default Welcome;
