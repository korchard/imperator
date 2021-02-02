import React from 'react';
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import Bar from './Bar';

const Operational: React.FC = () => {
  return (
    <div>
      <h1>Operational</h1>
      <script src='https://charts.mongodb.com/charts-project-0-teizd'></script>
      <Bar />
    </div>
  );
};

//npm install react-apexcharts
export default Operational;
