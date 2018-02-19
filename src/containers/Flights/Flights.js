import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFlights} from './FlightsAction';

class Flights extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFlights());
  }

  renderFlights() {
    console.log(this.props.flights);
    return (
      Object.keys(this.props.flights).map(flight => {
        return (
          <Fragment>
            flight
          </Fragment>
        )
      })
    )
  }

  render() {
    return (
      <div>
        {this.renderFlights()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { flights: state.flights }
}

export default connect(mapStateToProps)(Flights);