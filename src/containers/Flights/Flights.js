import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFlights} from './FlightsAction';
import Loading from 'react-loading-animation';

class Flights extends Component {
  constructor(props) {
    super(props);

    this.renderFlights = this.renderFlights.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFlights());
  }

  renderFlights(data) {
    const { results } = data;
    return (
      results.map(result => result.outbound.flights.map(flight => {
        return (
          <tr key={flight.flight_number}>
            <td>{flight.operating_airline}</td>
            <td>{flight.origin.airport}</td>
            <td>{flight.destination.airport}</td>
            <td>{flight.arrives_at}</td>
            <td>{flight.departs_at}</td>
            <td>{result.fare.total_price}</td>
          </tr>
        )
      }))
    );
  }

  render() {
    if (this.props.flights < 1) {
      return (
        <Loading width={200} height={200} strokeWidth={2} />
      )
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Arrival</th>
            <th>Departure</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.flights.map(this.renderFlights)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { flights: state.flights }
}

export default connect(mapStateToProps)(Flights);