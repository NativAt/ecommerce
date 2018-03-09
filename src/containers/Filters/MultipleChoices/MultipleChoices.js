import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { selectChange } from './MultipleChoicesAction';
import Loading from 'react-loading-animation';

class MultipleChoices extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;  
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch(selectChange(name, value));
  }

  renderCheckbox(data) {
    const { meta: { carriers } = {} } =  data;
    return Object.keys(carriers).map(carrier => {
      return (
        <Fragment key={carrier}>
        <label>
          <input 
            name={carrier}
            type="checkbox" 
            checked={this.props.multiple[carrier] ? this.props.multiple[carrier] : false }
            onChange={this.handleInputChange}
            />
            {carrier}
        </label>
        <br />
        </Fragment>
      )
    });
  }

  renderFilter() {
    return Object.keys(this.props.multiple).map(filter => {
      return (
        <Fragment key={filter} >
        <label>
          <input 
            name={filter}
            type="checkbox" 
            checked={this.props.multiple[filter] ? this.props.multiple[filter] : false }
            onChange={this.handleInputChange}
            />
            {filter}
        </label>
        <br />
        </Fragment>
      )
    });
  }

  render() {
    if (this.props.flights < 1) {
      return (
        <Loading width={100} height={100} strokeWidth={2} />
      )
    }

    return (
      <Fragment>
        <h6>Carriers</h6>
        <form>
          {this.renderFilter()}
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    multiple: state.multiple, 
    flights: state.flights,
  }
}

export default connect(mapStateToProps)(MultipleChoices);
