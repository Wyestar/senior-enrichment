import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from "../reducers/campusReducer"
import { fetchStudent } from '../reducers/studentSingleReducer';
import axios from 'axios';

class StudentEdit extends Component {
  constructor(props) {
    super(props)
      const { name, email, campusId } = this.props.student;
    this.state = {
      name,
      email,
      campusId
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudent(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.student.name,
      email: nextProps.student.email,
      campusId: nextProps.student.campusId
    });
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
    axios.put(`/api/student/${this.props.student.id}`, {name, email, campusId})
    this.props.history.push(`/student/${this.props.student.id}`);
  }

  render() {
    const { name, email, campusId } = this.state;
    return (
      <div>
        <h3>Edit Student</h3>
          <form>
            <p>Student Name</p>
              <input onChange={this.onChangeHandler('name')} type="text" value={name} />
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
              <input onChange={this.onChangeHandler('email')} type="text" value={email}/>
              <button onClick={this.onSubmitHandler}>SUBMIT</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    student: state.singlestudent
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    },
    getStudent(student) {
      dispatch(fetchStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit);
