import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChange } from './MultipleChoicesAction';

class MultipleChoices extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;  
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch(selectChange(name, value));
  }

  render() {
    console.log(this.props.multiple);
    return (
      <form>
        <label>
        <input 
          name="Nike"
          type="checkbox" 
          checked={this.props.multiple.value ? this.props.multiple.value.brand : false }
          onChange={this.handleInputChange} />
            Nike
        </label>
        <br />
        <label>
        <input 
          name="Adidas"
          type="checkbox" 
          checked={this.props.multiple.value ? this.props.multiple.value.brand : false }
          onChange={this.handleInputChange} />
            Adidas
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { multiple: state.multiple }
}

export default connect(mapStateToProps)(MultipleChoices);
