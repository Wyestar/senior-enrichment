import React, { Component } from 'react';

class StudentEntry extends Component {

  // local state for editting

  // addStudentAndCampus
    // add input fields to state.
    // student is a string
    // campus is from a drop-down menu
    // add email option?
    // bundle all inputs into an object and findorcreate in db
    // rerender student list

  // onclick for submit
  submitNewStudent() {

  }

  render() {
    // entry component goes away
    // student list jsx re-renders
    // submit button route back to Students
    <form>
      <h1>Add Student</h1>
        <input
          type="text"
          student="">

        // drop down menu
        <select>
          <options items=`${campuses}`>
        </select>

        // input needs to post to db, update state, and redirect to students list
      <input type="submit" value="Submit">
    </form>
  }

}
