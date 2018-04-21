import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../Filters/Dropdown/Dropdown'
import './Search.scss';
import planIn from '../../images/plane_in_icon.svg'
import planOut from '../../images/plane_out_icon.svg'
import sub1 from '../../images/sub1.svg'
import sub2 from '../../images/sub2.svg'
import sub3 from '../../images/sub3.svg'
import sub4 from '../../images/sub4.svg'


class Search extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row wrappper">
            <div className="col-md-2 offset-md-4">
              <Dropdown class="basic-addon1" placeholder="From" img={planOut} />
            </div>
            <div className="col-md-2">
              <Dropdown class="basic-addon2" placeholder="To" img={planIn} />
            </div>
          </div>
        </div>
       
        <div className="container homepage-sub-section">
          <div className="row mt-5"></div>
          <div className="row mt-5"></div>
          <div className="row">
            <div className="col-md-3">
              <img src={sub1} alt="" />
              <h3>The world's travel search engine</h3>
              <p>Skyscanner compares millions of flights to find you the cheapest deal, fast. Whether you want to go to Tenerife or Tokyo, we'll find low cost flights to get you there. We also find the cheapest hotels and car hire deals.</p>
            </div>
            <div className="col-md-3">
              <img src={sub2} alt="" />
              <h3>The world's travel search engine</h3>
              <p>Skyscanner compares millions of flights to find you the cheapest deal, fast. Whether you want to go to Tenerife or Tokyo, we'll find low cost flights to get you there. We also find the cheapest hotels and car hire deals.</p>
            </div>
            <div className="col-md-3">
              <img src={sub3} alt="" />
              <h3>The world's travel search engine</h3>
              <p>Skyscanner compares millions of flights to find you the cheapest deal, fast. Whether you want to go to Tenerife or Tokyo, we'll find low cost flights to get you there. We also find the cheapest hotels and car hire deals.</p>
            </div>
            <div className="col-md-3">
              <img src={sub4} alt="" />          
              <h3>The world's travel search engine</h3>
              <p>Skyscanner compares millions of flights to find you the cheapest deal, fast. Whether you want to go to Tenerife or Tokyo, we'll find low cost flights to get you there. We also find the cheapest hotels and car hire deals.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;