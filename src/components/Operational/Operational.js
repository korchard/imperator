import React from 'react';
import BarGraph from './BarGraph';
import { MonthlyUsers } from './MonthlyUsers';
import PlanTypeGraph from './PlanTypeGraph.js';
import './Operational.css';

const Operational = () => {
  return (
    <div className='flexbox'>
      <div className='gridbox1'>
        <div className='headerArea'>
          <h1>Operational</h1>
        </div>
        <div className='barGraph'>
          <h4 className="title">Total Actions All Companies</h4>
          <BarGraph />
        </div>
        <div className='planGraph'>
          <h4 className="title">Plan Type Percentages</h4>
          <PlanTypeGraph />
        </div>
        <div className='monthlyGraph'>
          <h4 className="title">New Monthly Users</h4>
          <MonthlyUsers />
        </div>
      </div>
    </div>
  );
};

export default Operational;
