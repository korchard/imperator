import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

function StrategicGraph() {
    const dispatch = useDispatch();
    const strategicGraph = useSelector((redux) => redux.strategicGraph);

    useEffect(() => {
        dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' });
      }, [])

    // const chartOptions = {
    //   options: {
    //     chart: {
    //       id: "basic-bar",
    //       stacked: true
    //     },
    //     series: [],
    //     plotOptions: {
    //       bar: {
    //         horizontal: true
    //       }
    //     },
    //     title: {
    //       text: "Average Length of Plans by Type"
    //     },
    //     xaxis: {
    //       categories: ['Enterprise', 'Pro', 'Trial', 'Premium']
    //     }
    //   }
      
    // };

    const [opt, setOpt] = useState({
      options: {
        chart: {
           id: "basic-bar",
           stacked: true
        },
        series: [],
        plotOptions: {
          bar: {
            dataLabels: {
              total: {
                show: true,
                label: 'Average Length of Plans by Type'
              }
            }
          }
        },
        // labels: ['Pro', 'Premium', 'Enterprise', 'Trial']
      }
    })

    let strategy = [];
    if (strategicGraph.avgLength === 'Enterprise') {
      strategy.push(strategicGraph.avgLength);
    } else if (strategicGraph.avgLength === 'Premium') {
      strategy.push(strategicGraph.avgLength);
    } else if (strategicGraph.avgLength === 'Pro') {
      strategy.push(strategicGraph.avgLength);
    } else if (strategicGraph.avgLength === 'Trial') {
      strategy.push(strategicGraph.avgLength);
    }

    console.log('array', strategy);

    let enterprise = strategicGraph[3]?.avgLength
    let pro = strategicGraph[4]?.avgLength
    let trial = strategicGraph[0]?.avgLength
    let premium = strategicGraph[1]?.avgLength
  
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