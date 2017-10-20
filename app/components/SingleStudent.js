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
    // console.log(this.props.student.id ,'student id');
  const campus =this.props.student.campus;
  return (
    <div>
    SingleStudent

        <h1>{this.props.student.name}</h1>
        <p>{this.props.student.email}</p>
        { campus &&
            <Link to={`/campus/${this.props.student.campusId}`} >{campus.name}</Link>
        }
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

