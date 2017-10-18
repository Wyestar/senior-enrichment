import React, { Component } from 'react';

this can be a functional presentational component,

function SingleCampus(props) {

  const {campus} = props;

  render() {
  // this jsx is a child of the home page, aka campus page. it rerenders the page
  // add an exit button to remove singlecampus view and return to home page
    <h2>{campus.name}</h2>
      {
        campus.students.map(student => {
          return (
            <Link to="studenturl" >
              <li key={student.id}>
                {student.name}
              </li>
            </Link>
          )
        })
      }
  }

}

export default SingleCampus;
