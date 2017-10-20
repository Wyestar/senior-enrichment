import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../reducers/studentReducer';

// action types/creators?
// have delete student button here

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    console.log(this.props ,'students props');
    return (
      <div>
      Students
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
            <Link to={`/campus/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          </li>
        ))
      }
      </ul>
      </div>
    )
  }
}

    // seperate jsx for:
    // need a button to add a student and associated campus, submit button adds
    // input fields to student list which is displayed below, the whole list is
    // re-rendered

    // Extra credit feature
    // student list of all students; this has a delete button that will remove
    // the student from the database, also causes a rerender


// students must be able to be added and deleted from lists
const mapStateToProps = function(state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getStudents() {
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
