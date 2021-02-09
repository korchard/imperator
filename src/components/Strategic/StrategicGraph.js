import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

function StrategicGraph() {
    const dispatch = useDispatch();
    const strategicGraph = useSelector((redux) => redux.strategicGraph);

    useEffect(() => {
        dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' });
      }, []) 

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
              colors: ['rgb(33, 44, 46)'],
            },
          },
          series: [],
          xaxis: {
            categories: [ 'Trial', 'Pro', 'Premium', 'Enterprise'],
            position: 'top',
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              style: {
                colors: ['rgb (11, 53, 77)', 'rgb (238, 95, 27)', 'rgb(46, 162, 178)', 'rgb(33, 44, 46)'],
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
              color: 'rgb(33, 44, 46)',
            },
          },
        },
      });

    let enterprise = strategicGraph[0]?.avgLength
    let premium = strategicGraph[1]?.avgLength
    let pro = strategicGraph[2]?.avgLength
    let trial = strategicGraph[3]?.avgLength

  
return (
    <div className="strategic">
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <ReactApexChart
        options={opt.options}
        series={[
          {
            name: 'total actions',
            data: [
            trial, pro, premium, enterprise
            ],
          },
        ]}
        type='bar'
        width='500'
        height='350'
      />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicGraph;