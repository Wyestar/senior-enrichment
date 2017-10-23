import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from "../reducers/campusSingleReducer";
import { fetchStudents, deleteStudent } from '../reducers/studentReducer';
import axios from 'axios';

class CampusEdit extends Component {
  constructor(props) {
    super(props)
      const { name, image } = this.props.campus;
    this.state = {
      name,
      image,
      studentAdd: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSubmitHandler2 = this.onSubmitHandler2.bind(this);
  }

  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
    this.props.getStudents();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.campus.name,
      image: nextProps.campus.image,
    })
  }

  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      });
    }
  }

  onSubmitHandler() {
    const { name, image } = this.state;
    axios.put(`/api/campus/${this.props.campus.id}`, {name, image})
    this.props.history.push(`/campus/${this.props.campus.id}`);
  }

  onSubmitHandler2() {
    const { studentAdd } = this.state;
    const studentInfo = studentAdd.split("-");
    const studentId = parseInt(studentInfo[0]);
    const campusId = parseInt(studentInfo[1]);
    axios.put(`/api/student/${studentId}`, {campusId})
    this.props.history.push(`/campus/${this.props.campus.id}`);
  }

  render() {
    const { name, image } = this.state;
    const campusId = this.props.campus.id;
    const studentArray = this.props.studentsAll.filter(function(student) {
      return (student.campusId === campusId)
    });
    const otherStudents = this.props.studentsAll.filter(function(student) {
      return (student.campusId !== campusId)
    });
    return (
      <div>
        <h3>Edit Campus Students</h3>
          <p>Remove Student</p>
            <ul>
            {
              studentArray.map(student => (
                <li key={student.id} >
                  <div>
                    <Link to={`/student/${student.id}`}>
                      {student.name}
                      </Link>
                  </div>
                  <button onClick={this.props.deleteStudent(student.id)}>DELETE</button>
                </li>
              ))
            }
            </ul>
          <p>Add Student</p>
            <select onChange={this.onChangeHandler('studentAdd')}>
            <option>ADD STUDENT</option>
            {
              otherStudents.map(student => {
                return <option key={student.id} value={`${student.id}-${campusId}`}>{student.name}</option>
              })
            }
            </select>
            <button onClick={this.onSubmitHandler2} >SUBMIT</button>

        <h3>Edit Campus</h3>
          <form>
            <p>Campus Name</p>
              <input onChange={this.onChangeHandler('name')} type="text" value={name} />
            <p>Campus Image, please provide an image url</p>
              <input onChange={this.onChangeHandler('image')} type="text" value={image} />
            <button onClick={this.onSubmitHandler} >SUBMIT</button>
          </form>
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
    getStudents() {
      dispatch(fetchStudents())
    },
    deleteStudent(studentId) {
      return () => {
        dispatch(deleteStudent(studentId))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusEdit);
