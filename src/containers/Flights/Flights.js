import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TableRow from '../../components/Semantic/TableRow/TableRow';
import { getFlights} from './FlightsAction';
import { sliderInit } from '../Filters/Range/RangeFilterAction';
import { checkboxInit } from '../Filters/MultipleChoices/MultipleChoicesAction';
import Accordion from '../Accordion/Accordion';
import Loading from 'react-loading-animation';
import { IMG_URL } from '../../config';

 {/* <TableRow data={results} IMG_URL={IMG_URL} /> */}

class Flights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      class: 'hide'
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderFlights = this.renderFlights.bind(this);
  }

  handleClick() {
    if (this.state.open) {
      this.setState({
        open: false,
        class: 'hide'
      });
    } else {
      this.setState({
        open: true,
        class: 'show'
      }); 
    }
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getFlights());
    dispatch(checkboxInit({ 'UX': true, 'TP': true }))
    dispatch(sliderInit(0, 3000));
  }

  renderFlights(data) {
    const { results } = data;
    return (
      results.map(result => result.outbound.flights.map(flight => {
        if ( (Number(this.props.slider.value) >= Number(result.fare.total_price)) && this.props.multiple[flight.operating_airline]) {
          const carrierLogoUrl = `${IMG_URL}/${data.meta.carriers[flight.operating_airline].logos.medium}`;
          return (
            <Accordion flightNumber={flight.flight_number}>
                <div className="table-cell"><img src={carrierLogoUrl}></img></div> 
                <div className="table-cell">{flight.operating_airline}</div>
                <div className="table-cell">{flight.origin.airport}</div>
                <div className="table-cell">{flight.destination.airport}</div>
                <div className="table-cell">{flight.arrives_at}</div>
                <div className="table-cell">{flight.departs_at}</div>
                <div className="table-cell">{result.fare.total_price}</div>
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
      <div className="table">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell">Airline</div>
            <div className="table-cell">Carrier</div>
            <div className="table-cell">Origin</div>
            <div className="table-cell">Destination</div>
            <div className="table-cell">Arrival</div>
            <div className="table-cell">Departure</div>
            <div className="table-cell">Price</div>
          </div>
        </div>
        <div className="table-row-group">
          {this.props.flights.map(this.renderFlights)}
        </div>
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