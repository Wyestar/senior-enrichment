import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampus } from '../reducers/campusReducer';
import axios from 'axios';

class Campuses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      image: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }

  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      })
    }
  }

  onSubmitHandler() {
    const campusName = this.state.name;
    const campusImage = this.state.image;
    axios.post('/api/campus', {name: campusName, image: campusImage});
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h3>Campuses</h3>
          <ul>
          {
            this.props.campuses &&
            this.props.campuses.map(campus => (
              <li key={campus.id}>
                <div>
                  <Link to={`/campus/${campus.id}`}>
                    {campus.name}
                  </Link>
                </div>
                <button onClick={this.props.deleteCampus(campus.id)}>DELETE</button>
              </li>
            ))
          }
          </ul>
        <h4>Add Campus</h4>
          <form>
            <p>Campus Name</p>
              <input onChange={this.onChangeHandler('name')} type="text" />
            <p>Campus Image, please provide an image url</p>
              <input onChange={this.onChangeHandler('image')} type="text" />
            <button onClick={this.onSubmitHandler} >SUBMIT</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    },
    deleteCampus(campusId) {
      return () => {
        dispatch(deleteCampus(campusId))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
