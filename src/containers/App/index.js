import React from 'react';
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/Sidebar'
import RangeSlider from '../Filters/Range/RangeSlider'
import MultipleChoices from '../Filters/MultipleChoices/MultipleChoices'
import RadioButton from '../Filters/RadioButton/RadioButton'
import Flights from '../Flights/Flights'
import '../../index.css'

const App = () => (
  <div className="container">
      <Header />
      <div className="row mt-3"></div>
      <div className="row">
        <SideBar>
          <RangeSlider />
          <br />
          <MultipleChoices/>
          <br />
          <RadioButton />
        </SideBar>
        <div className="col-md-10">
          <Flights />
        </div>
    </div>
  </div>
)

export default App;