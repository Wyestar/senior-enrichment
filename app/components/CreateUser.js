import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from "../reducers/campusReducer";
import { fetchStudents } from '../reducers/studentReducer';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      });
    }
  }

  onSubmitHandler() {
    const { username, password } = this.state;
    axios.post('api/newuser', {username, password});
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h3>Create Account</h3>
          <p>Username</p>
            <input onChange={this.onChangeHandler('username')} type="text" />
          <p>Password</p>
            <input onChange={this.onChangeHandler('password')} type="text" />
          <button onClick={this.onSubmitHandler} >SUBMIT</button>
      </div>
    )
  }
}
