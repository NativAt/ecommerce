import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sliderChange } from './RangeFilterAction';
import './RangeSlider.css';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { dispatch } = this.props;
    dispatch(sliderChange(event.target.value));
  }

  render() {
    const { max_range, min_range, value } = this.props;
    return (
      <div>
        <h6>Price Range</h6>
        <div className="slidecontainer">
          <input onChange={this.onChange} type="range" min={min_range} max={max_range} value={value} className="slider" id="myRange" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { slider: state.slider };
}

export default connect(mapStateToProps)(RangeSlider);
