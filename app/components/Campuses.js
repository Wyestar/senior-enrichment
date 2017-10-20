import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campusReducer';

// class Campuses extends Component {}

class Campuses extends Component {

  // break out objects from props?
  // otherwise use this.props.thing for now
  componentDidMount() {
    this.props.getCampuses()
  }
  // const { campuses } = props;
  // props.campuses?
  //

    // console.log(props ,'campuses props');
    // console.log(campuses);
    // campus div with toggle-able single campus div
    // select and option tags are for drop-down menu
    // amount of campuses is static, but mapping for rerender is fine

    render() {
      return (
        <div>
        Campuses
        <ul>
        {
          this.props.campuses &&
          this.props.campuses.map(campus => (
              <li>
                  <Link key={campus.id} to={`/campus/${campus.id}`}>
                      {campus.name}
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
    campuses: state.campuses
    // campus: state.campus
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
// export default Campuses;
