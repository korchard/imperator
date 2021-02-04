import React from 'react';
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import BarGraph from './BarGraph';
import { MonthlyUsers } from './MonthlyUsers';
import PlanTypeGraph from './PlanTypeGraph';
import './Operational.css'

const Operational = () => {
  return (
    <div>
      <h1>Operational</h1>
      <script src='https://charts.mongodb.com/charts-project-0-teizd'></script>
      <div className='OperationalContainer'>
      <BarGraph />
      <PlanTypeGraph/>
      <MonthlyUsers />
      </div>
    </div>
  );
};

//npm install react-apexcharts
export default Operational;
