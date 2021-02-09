import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

function StrategicGraph() {
    const dispatch = useDispatch();
    const strategicGraph = useSelector((redux) => redux.strategicGraph);

    useEffect(() => {
        dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' });
      }, [])

    const chartOptions = {
          series: [
            {
              name: "basic",
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }
          ],
          chart: {
            type: "bar",
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [
                'Pro', 
                'Premium', 
                'Enterprise', 
                'Trial'
            ]
          }
        }
        // labels: ['Pro', 'Premium', 'Enterprise', 'Trial']

    return (
        <div className="strategic">
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={opt}
                  series={[
                    {
                      data: [trial, premium, enterprise, pro],
                    },
                  ]}
                  type="bar"
                  width="500"
                />
              </div>
            </div>
          </div>
        </div>
      );

}

export default StrategicGraph;