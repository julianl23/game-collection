import axios from 'axios';
import React, { Component } from 'react';
import cn from 'classnames';

class Registration extends Component {
  submitRegistration(e) {
    e.preventDefault();
    const form = e.target;
    const registrationData = {
      username: form.username.value,
      password: form.password.value
    };

    axios.post('/api/register', registrationData)
      .then((res) => {
        console.log('logged in', res.data.user);
      })
      .catch((res) => {
        console.log('Register failed', res.data);
      });
  }

  render() {
    return(
      <div className={cn('cp-registration')}>
        <h1>Registration</h1>

        <form onSubmit={this.submitRegistration}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;