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
    //debugger
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
          checked={this.props.multiple.Nike ? this.props.multiple.Nike : false }
          onChange={this.handleInputChange} />
            Nike
        </label>
        <br />
        <label>
        <input 
          name="Adidas"
          type="checkbox" 
          checked={this.props.multiple.Adidas ? this.props.multiple.Adidas : false }
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
