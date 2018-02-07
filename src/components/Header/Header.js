import React from 'react';
// import './SideBar.css';

const Header = (props) => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <h6>Refine Results</h6>
      </div>
      <div className="col-sm-9">
        <h6>Search Results</h6>
      </div>  
    </div>
  );
}

export default Header;

