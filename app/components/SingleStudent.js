import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent } from '../reducers/studentSingleReducer';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.id);
  }

  render() {
    const campus =this.props.student.campus;
    return (
      <div>
        <h4>{this.props.student.name}</h4>
        <p>{this.props.student.email}</p>
        {
          campus &&
          <Link to={`/campus/${this.props.student.campusId}`} >{campus.name}</Link>
        }
        <div>
          <Link to={`/student/${this.props.student.id}/edit`}>Edit Student</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    student: state.singlestudent,
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getStudent(student) {
      dispatch(fetchStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
