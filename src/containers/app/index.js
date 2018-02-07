import React from 'react';
import { Route, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/Sidebar'
import RangeSlider from '../Filters/Range/RangeSlider'
import '../../index.css'

const App = () => (
  <div className="container">
      <Header />
      <div className="row mt-3"></div>
      <div className="row">
        <SideBar>
          <RangeSlider />
        </SideBar>
        <div className="col-sm-9">
          col 2
        </div>
    </div>
  </div>
)

export default App


{/* <header>
        <Link to="/">Home</Link>
      </header>

      <main>
        <Route exact path="/" />
      </main> */}