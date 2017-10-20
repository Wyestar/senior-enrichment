import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from "../reducers/campusReducer"
import axios from 'axios';

class StudentEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      campusId: null
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
      });
    }
  }

  onSubmitHandler() {
    const { name, email, campusId } = this.state;
    console.log(campusId);
    axios.post('/api/student', {name, email, campusId})
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h4>Add Student</h4>
          <form>
            <p>Student Name</p>
              <input onChange={this.onChangeHandler('name')} type="text" />
            <p>Campus</p>
              <select onChange={this.onChangeHandler('campusId')}>
              <option>CHOOSE CAMPUS</option>
              {
                this.props.campuses.map(campus => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>
                })
              }
              </select>
            <p>Student Email</p>
              <input onChange={this.onChangeHandler('email')} type="text" />
            <button onClick={this.onSubmitHandler}>SUBMIT</button>
          </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentEntry);
