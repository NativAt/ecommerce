import React, { Component, Fragment } from 'react';
import './Accordion.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      class: 'hide'
    };

    this.handleClick = this.handleClick.bind(this);
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

  // render() {
  //   return (
  //     <div className={this.state.class}>
  //       <button>toggle</button>
  //       <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
  //       <div className="articlewrap">
  //         <div className="article">
  //           {this.props.children}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <Fragment>
        <div className="box" onClick={this.handleClick} key={this.props.flightNumber}>
          {this.props.children}
        </div>
        <div className={`box-2  ${this.state.class}`}>
          <div className="column-2">Remaining Seats: {this.props.bookingInfo.seats_remaining}</div>
          <div className="column-2">Travel Class: {this.props.bookingInfo.travel_class}</div>
        </div>
      </Fragment>
    );
  }
}

export default Accordion;