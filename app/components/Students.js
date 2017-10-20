import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../reducers/studentReducer';

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        <h3>Students</h3>
          <ul>
          {
            this.props.students &&
            this.props.students.map(student => (
              <li key={student.id}>
                <div>
                  <Link to={`/student/${student.id}`}>
                    {student.name}
                  </Link>
                </div>
                <div>
                  <Link to={`/campus/${student.campusId}`}>
                  {
                    student.campus &&
                    student.campus.name
                  }
                  </Link>
                </div>
                <button onClick={this.props.deleteStudent(student.id)}>DELETE</button>
              </li>
            ))
          }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getStudents() {
      dispatch(fetchStudents())
    },
    deleteStudent(studentId) {
      return () => {
        dispatch(deleteStudent(studentId))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
