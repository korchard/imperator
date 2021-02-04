import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

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
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 6,
          dataLabels: {
            position: 'top',
          },
        },
      },
      colors: ['#0535f7', '#66DA26', '#bf05f7', '#f70557', '#f7c305'],
      dataLabels: {
        enabled: true,
        offsetY: -15,
        style: {
          fontSize: '12px',
          colors: ['#000'],
        },
      },
      series: [],
      xaxis: {
        categories: ['Documents', 'Hashtags', 'Insights', 'Notes', 'Projects'],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: ['#0535f7', '#66DA26', '#bf05f7', '#f70557', '#f7c305'],
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
      title: {
        text: 'Total Actions All Companies',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#000',
        },
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
              totalActionData.documents.count,
              totalActionData.hashtags.count,
              totalActionData.insights.count,
              totalActionData.notes.count,
              totalActionData.projects.count,
            ],
          },
        ]}
        type='bar'
        width='500'
        height='350'
      />
    </div>
  );
};
export default BarGraph;
