import React, { Component, Fragment } from 'react';
import './Dropdown.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isKeyPress: false
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleKeyPress() {
    this.setState({ isKeyPress: true });
  }

  handleMouseDown() {
    this.setState({ isKeyPress: false });
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon" id={this.props.class}>
          <img src={this.props.img} alt="" /> 
        </span>
        <input type="text" onKeyPress={this.handleKeyPress} className="form-control" placeholder={this.props.placeholder} aria-describedby={this.props.class} /> 
        {this.state.isKeyPress && 
        <div className="dropdown-menu-box">
          <div>Tel-Aviv</div>
          <div>New-York</div>
          <div>Amsterdam</div>
        </div>}
      </div>
    )
  }
}

export default Dropdown;