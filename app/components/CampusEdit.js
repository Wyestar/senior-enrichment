import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from "../reducers/campusSingleReducer"
import axios from 'axios';

class CampusEdit extends Component {
  constructor(props) {
    super(props)
      const { name, image } = this.props.campus;
    this.state = {
      name,
      image
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.campus.name,
      image: nextProps.campus.image
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

  render() {
    const { name, image } = this.state;
    return (
      <div>
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
    campus: state.singlecampus
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampus(campus) {
      dispatch(fetchCampus(campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusEdit);
