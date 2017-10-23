import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../reducers/logReducer';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      });
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div>
          <p>Username</p>
            <input type="text" onChange={this.onChangeHandler('username')} />
          <p>Password</p>
            <input type="text" onChange={this.onChangeHandler('password')} />
          <button onClick={this.props.getUser(username, password)}>LOGIN</button>
        </div>

        <div>
          <Link to="/createuser">Create New User</Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getUser(username, password) {
      return () => {
        dispatch(getUser(username, password))
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
