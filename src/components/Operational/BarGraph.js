import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

const BarGraph = () => {
  const dispatch = useDispatch();
  const totalActionData = useSelector((store) => store.totalAction);

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_ACTIONS' });
  }, []);

  const [opt, setOptions] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        },
      },
      colors: ['#2EA2B2', '#0B354D', '#EE5F1B', '#8a97a5dc', '#09588E'],
      dataLabels: {
        enabled: false,
        offsetY: -15,
        style: {
          fontSize: '12px',
          colors: ['rgb(33, 44, 46)'],
        },
      },
      series: [],
      xaxis: {
        categories: ['Documents', 'Hashtags', 'Insights', 'Notes', 'Projects'],
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#212C2E',
          },
        },
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={opt.options}
        series={[
          {
            name: 'total actions',
            data: [
              432,
              105,
              300,
              666,
              900,
              // totalActionData.documents.count,
              // totalActionData.hashtags.count,
              // totalActionData.insights.count,
              // totalActionData.notes.count,
              // totalActionData.projects.count,
            ],
          },
        ]}
        type='bar'
        width='100%'
        height='350'
      />
    </div>
  );
};
export default BarGraph;
