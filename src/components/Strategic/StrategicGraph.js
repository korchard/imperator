import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

function StrategicGraph() {
  const dispatch = useDispatch();
  const strategicGraph = useSelector((redux) => redux.strategic.strategicGraph);

  useEffect(() => {
    dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' });
  }, [])

  const [opt, setOptions] = useState({
    series: [{
      data: []
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#2EA2B2'],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Trial', 'Pro', 'Premium', 'Enterprise'],
        labels: {
          style: {
            colors: ['#212C2E'],
          },
        },
      },
      yaxis: {
        categories: ['Days'],
        labels: {
          style: {
            colors: ['#212C2E'],
            fontSize: '.75rem'
          },
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
                  name: 'Average Length of Plan by Days',
                  data: [
                    30, pro, premium, enterprise
                  ],
                },
              ]}
              type='bar'
              width='100%'
              height='350'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicGraph;