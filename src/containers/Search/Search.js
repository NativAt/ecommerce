import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Search.scss';

const Search = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="card card-block">
        Center
        </div>
      </div>
      <div className="col-md-6">
        <div className="card card-inverse card-danger">
        Taller
        </div>
      </div>
    </div>
  </div>
)

export default Search


// class Search extends Component {

//   render() {
//     return (
//       <div>Hello world!</div>
//     )
//   }
// }

// export default Search;