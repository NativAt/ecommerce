import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { radioChange, initRadioFilters } from './RadioButtonAction';

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initRadioFilters());
  }  

  handleInputChange(event) {
    const { dispatch } = this.props;  
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;
    dispatch(initRadioFilters());
    dispatch(radioChange(name, value));
  }

  renderFilters() {
    return Object.keys(this.props.radio).map(filter => {
      return (
        <Fragment key={filter} >
        <label>
          <input 
            name={filter}
            type="radio" 
            checked={this.props.radio[filter] ? this.props.radio[filter] : false }
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
    return (
      <Fragment>
        <h6>Brand</h6>
        <form>
          {this.renderFilters()}
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { radio: state.radio }
}

export default connect(mapStateToProps)(RadioButton);
