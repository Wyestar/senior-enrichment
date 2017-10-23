import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/logReducer';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  logoutStart() {
    this.props.logoutDispatch();
  }

  render() {
    const { logStatus } = this.props;
    return (
      <div>
        <Link to="/" >Home___</Link>
        <Link to="/students" >Students___</Link>
        <Link to="/studententry">Student Entry___</Link>

        {
          !logStatus &&
          <Link to="/login">Login</Link>
        }

        {
          logStatus &&
          <div>
          <Link to="/" onClick={this.logoutStart}>Logout</Link>
          <p>Logged as: {this.props.username}</p>
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    logStatus: state.log.logStatus,
    username: state.log.username
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    logoutDispatch() {
      return () => {
        dispatch(logoutDispatch())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
