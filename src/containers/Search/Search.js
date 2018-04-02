import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Search.scss';

const Search = () => (
  <div className="container-fluid wrapper">
      <div className="row align-items-center pos">
        <div className="col-md-3">
          <div className="card card-block">
          Center
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-inverse card-danger">
          Taller
          </div>
        </div>
      </div>
    </div>
)

export default Search;