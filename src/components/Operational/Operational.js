import React from 'react';
import BarGraph from './BarGraph';
import { MonthlyUsers } from './MonthlyUsers';
import PlanTypeGraph from './PlanTypeGraph.js';
import './Operational.css';

const Operational = () => {
  return (
    <div className='flexbox'>
      <div className='gridbox'>
        <div className='headerArea'>
          <h1>Operational</h1>
        </div>
        <div className='barGraph'>
          <BarGraph />
        </div>
        <div className='planGraph'>
          <PlanTypeGraph />
        </div>
        <div className='monthlyGraph'>
          <MonthlyUsers />
        </div>
      </div>
    </div>
  );
};

export default Operational;
