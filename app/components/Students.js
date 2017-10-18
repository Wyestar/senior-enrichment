import React, { Component } from 'react';

// action types/creators?
// have delete student button here

class Students extends Component {

  // no state?

  render() {
    // jsx with mapped list of students from array in store state

    // seperate jsx for:
    // need a button to add a student and associated campus, submit button adds
    // input fields to student list which is displayed below, the whole list is
    // re-rendered

    // student list of all students; this has a delete button that will remove
    // the student from the database, also causes a rerender
  }
}


// students must be able to be added and deleted from lists
const mapStateToProps = (state) => {
  return {

  }
}

// const mapDispatchToProps;

// export default connect()(Students)

// add feature where admins can log in and see emails of students
