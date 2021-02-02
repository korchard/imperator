import React from 'react';
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import BarGraph from './BarGraph';

const Operational: React.FC = () => {
  return (
    <div>
      <h1>Operational</h1>
      <script src='https://charts.mongodb.com/charts-project-0-teizd'></script>
      <BarGraph />
    </div>
  );
};

//npm install react-apexcharts
export default Operational;
