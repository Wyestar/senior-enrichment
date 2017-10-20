import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent } from '../reducers/studentSingleReducer';

class SingleStudent extends Component {

  // const {campus} = props;

  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.getStudent(this.props.match.params.id)
  }

  // render()
  // this jsx is a child of the home page, aka campus page. it rerenders the page
  // add an exit button to remove singlecampus view and return to home page
  render() {
    // console.log(this.props.campus)
    console.log(this.props.student.id ,'student id');

  return (
    <div>
    SingleStudent

        <h1>{this.props.student.name}</h1>
        <p>{this.props.student.email}</p>
    </div>
    )
  }


}

const mapStateToProps = function(state) {
  return {
    student: state.singlestudent
    // campus: state.campus
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

// <div>
// <h2>{campus.name}</h2>
//   {
//     campus.students.map(student => (
//         <Link to="studenturl" >
//           <li key={student.id}>
//             {student.name}
//           </li>
//         </Link>
//       ))
//   }
//   </div>
// single student
