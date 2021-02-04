import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

const BarGraph = () => {
  const dispatch = useDispatch();
  const totalActionData = useSelector((store) => store.totalAction);

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_ACTIONS' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      {JSON.stringify(totalActionData.hashtags)}
      <Chart options={opt.options} series={opt.series} type='bar' width='500' />
    </div>
  );
};
export default BarGraph;
