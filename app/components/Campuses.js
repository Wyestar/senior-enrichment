import React, { Component } from 'react';
import { fetchCampuses } from '../reducers/campusReducer';

// this component is also home
//

class Campuses extends component {


  // break out objects from props?
  // otherwise use this.props.thing for now

  const { campuses } = props;
  // props.campuses?

  render() {
    // campus div with toggle-able single campus div
    // select and option tags are for drop-down menu
    // amount of campuses is static, but mapping for rerender is fine
    <ul>
    {
      // {campuses}
      // add campus image and other styling to this home page
      // from singlecampus page, require home to be reclicked to come back to all campus page
      campuses.map(campus => {
        return (
          <Link to={`/campus/${campus.id}`}>
            <li key={campus.id}>
              {campus.image}
            </li>
          </Link>
        )
      })
    }
    </ul>
  }
  // END OF RENDER
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchCampusesData: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
