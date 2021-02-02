import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BarGraph: React.FC = () => {
  const [opt, setOptions] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [100, 200, 300],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [1, 2, 5, 7],
      },
    ],
  });
  return (
    <div>
      <Chart options={opt.options} series={opt.series} type='bar' width='500' />
    </div>
  );
};
export default BarGraph;
