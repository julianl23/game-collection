import axios from 'axios';
import React, { Component } from 'react';
import cn from 'classnames';

class Login extends Component {
  submitLogin(e) {
    e.preventDefault();
    const form = e.target;
    const loginData = {
      username: form.username.value,
      password: form.password.value
    };

    axios.post('/api/login', loginData)
      .then((res) => {
        console.log('logged in', res.data.user);
      })
      .catch((res) => {
        console.log('login failed', res);
      });
  }

  render() {
    return(
      <div className={cn('cp-login')}>
        <h1>Log In</h1>

        <form onSubmit={this.submitLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;