import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { selectChange, initFilters } from './MultipleChoicesAction';

class MultipleChoices extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    debugger
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initFilters());
  }  

  handleInputChange(event) {
    const { dispatch } = this.props;  
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch(selectChange(name, value));
  }

  renderFilters() {
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
  return { multiple: state.multiple }
}

export default connect(mapStateToProps)(MultipleChoices);
