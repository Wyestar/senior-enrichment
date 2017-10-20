import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class StudentEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      campusId: null
    }
  }
  // local state for editting

  // need to pull in campus array from store state so it can be mapped in select/options

  // addStudentAndCampus
    // add input fields to state.
    // student is a string
    // campus is from a drop-down menu
    // add email option?
    // bundle all inputs into an object and findorcreate in db
    // rerender student list

  onChangeHandler(event) {
    this.setState({
      name: {name: event.target.name.value},
      email: {email: event.target.email.value},
      campusId: {campusId: event.target.campusId.value}
    })
    console.log(this.state);
  }

  onSubmitHandler() {
    // sends state to be posted/putted in db

  }

  // studentdb
  // axios post function call

  render() {
    return (
    // entry component goes away
    // student list jsx re-renders
    // submit button route back to Students
      <h1>Add Student</h1>

    )
  }

}

// <form>
//     <input
//       type="text"
//       student="">
//
//     // drop down menu
//     <select>
//       <options items=`${campuses}`>
//     </select>
//
//     // input needs to post to db, update state, and redirect to students list
//   <input type="submit" value="Submit">
// </form>
