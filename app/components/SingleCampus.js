import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../reducers/campusSingleReducer';
import { fetchStudents } from '../reducers/studentReducer';

class SingleCampus extends Component {

  // const {campus} = props;

  componentDidMount() {
    // console.log(this.props.match.params.id);
    console.log(this.props, 'props in component didmount')
    this.props.getCampus(this.props.match.params.id);
    this.props.fetchStudents();
  }

  // render()
  // this jsx is a child of the home page, aka campus page. it rerenders the page
  // add an exit button to remove singlecampus view and return to home page
  render() {
    const campusId = this.props.campus.id;
    const studentArray = this.props.studentsAll.filter(function(student) {
      return (student.campusId === campusId)
    })
    console.log(studentArray,'singlecampusstudents');

  return (
    <div>
      <h1>{this.props.campus.name}</h1>
      <ul>
    {
      studentArray.map(student => (
        <li key={student.id} >
          <Link to={`/student/${student.id}`}>
              {student.name}
          </Link>
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
    campus: state.singlecampus,
    studentsAll: state.students
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampus(campus) {
      dispatch(fetchCampus(campus))
    },
    fetchStudents() {
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

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
