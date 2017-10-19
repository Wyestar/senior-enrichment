import React, { Component } from 'react';
import { fetchStudents } from '../reducers/studentReducer';

import { Link } from 'react-router-dom';


// action types/creators?
// have delete student button here

class Students extends Component {

  // no state?
  const { students, campuses } = props;

  render() {
    // jsx with mapped list of students from array in store state
    <ul>

    {
      // {campuses}
      // add campus image and other styling to this home page
      // from singlecampus page, require home to be reclicked to come back to all campus page
      students.map(student => {
          return (
            <Link to={`/student/${student.id}`}>
              <li key={student.id}>
                <div>
                {student.name}
                </div>
                <div>
                {campuses.campus.name}
                // match each student and campus
              </li>
            </Link>
          )
        })
      }

      </ul>
    }

    // seperate jsx for:
    // need a button to add a student and associated campus, submit button adds
    // input fields to student list which is displayed below, the whole list is
    // re-rendered

    // Extra credit feature
    // student list of all students; this has a delete button that will remove
    // the student from the database, also causes a rerender
  }
}


// students must be able to be added and deleted from lists
const mapStateToProps = function(state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchStudentsData: () => {
      dispatch(fetchStudents())
    }
  }
}

export default connect()(Students);
