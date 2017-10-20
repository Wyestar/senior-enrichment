import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campusReducer';
import axios from 'axios';

class Campuses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campus: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }

  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      })
    }
  }

  onSubmitHandler() {
    const campus = this.state.campus;
    axios.post('/api/campus', {name: campus});
  }

  render() {
    return (
      <div>
        Campuses
          <ul>
          {
            this.props.campuses &&
            this.props.campuses.map(campus => (
              <li key={campus.id}>
                <Link  to={`/campus/${campus.id}`}>
                  {campus.name}
                </Link>
              </li>
            ))
          }
          </ul>
        Add Campus
          <input type="text" onChange={this.onChangeHandler('campus')} />
          <button onClick={this.onSubmitHandler} >SUBMIT</button>
      </div>
      )
    }
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
