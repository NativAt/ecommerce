import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFlights} from './FlightsAction';
import { sliderInit } from '../Filters/Range/RangeFilterAction';
import { checkboxInit } from '../Filters/MultipleChoices/MultipleChoicesAction';
import Accordion from '../Accordion/Accordion';
import Loading from 'react-loading-animation';
import { IMG_URL } from '../../config';
import './Flights.scss';


class Flights extends Component {
  constructor(props) {
    super(props);

    this.renderFlights = this.renderFlights.bind(this);
  }


  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getFlights());
    dispatch(checkboxInit({ 'UX': true, 'TP': true }))
    dispatch(sliderInit(0, 4000));
  }

  renderFlights(data) {
    const { results } = data;
    return (
      results.map(result => result.outbound.flights.map(flight => {
        if ( (Number(this.props.slider.value) >= Number(result.fare.total_price)) && this.props.multiple[flight.operating_airline]) {
          const carrierLogoUrl = `${IMG_URL}/${data.meta.carriers[flight.operating_airline].logos.medium}`;
          return (
            <Accordion bookingInfo={flight.booking_info}>
                <div className="column"><img src={carrierLogoUrl}></img></div> 
                <div className="column">{flight.operating_airline}</div>
                <div className="column">{flight.origin.airport}</div>
                <div className="column">{flight.destination.airport}</div>
                <div className="column">{flight.arrives_at}</div>
                <div className="column">{flight.departs_at}</div>
                <div className="column">${result.fare.total_price}</div>
            </Accordion>
          )
        }
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
      <div>
        <div className="box">
          <div className="column">Airline</div>
          <div className="column">Carrier</div>
          <div className="column">Origin</div>
          <div className="column">Destination</div>
          <div className="column">Arrival</div>
          <div className="column">Departure</div>
          <div className="column">Price</div>
        </div>
        {this.props.flights.map(this.renderFlights)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    flights: state.flights,
    slider: state.slider,
    multiple: state.multiple

  }
}

export default connect(mapStateToProps)(Flights);