import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <div className="col-md-2 sidebar">
      {props.children}
    </div>
  )
}

export default SideBar;

