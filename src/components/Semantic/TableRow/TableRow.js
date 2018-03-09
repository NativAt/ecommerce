import React, { Component, Fragment } from 'react';

const TableRow = (props) => {
  props.data.map(result => result.outbound.flights.map(flight => {
    if ( (Number(this.props.slider.value) >= Number(result.fare.total_price)) && this.props.multiple[flight.operating_airline]) {
      const carrierLogoUrl = `${props.IMG_URL}/${props.data.meta.carriers[flight.operating_airline].logos.medium}`;
      return (
        <tr key={flight.flight_number}>
          <td><img src={carrierLogoUrl}></img></td> 
          <td>{flight.operating_airline}</td>
          <td>{flight.origin.airport}</td>
          <td>{flight.destination.airport}</td>
          <td>{flight.arrives_at}</td>
          <td>{flight.departs_at}</td>
          <td>{result.fare.total_price}</td>
        </tr>
      )
    }
  }))
}

export default TableRow;