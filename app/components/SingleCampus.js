import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../reducers/campusSingleReducer';
import { fetchStudents } from '../reducers/studentReducer';

class SingleCampus extends Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
    this.props.fetchStudents();
  }
  render() {
    const campusId = this.props.campus.id;
    const studentArray = this.props.studentsAll.filter(function(student) {
      return (student.campusId === campusId)
    });
    return (
      <div>
        <h4>{this.props.campus.name}</h4>
        <img src={this.props.campus.image} />
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
        <div>
          <Link to={`/campus/${this.props.campus.id}/edit`}>Edit Campus</Link>
        </div>
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
