import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Chart from 'react-apexcharts';

const SingleCompanyGraph = () => {

  const location = useRouteMatch();

  useEffect(() => {
    checkSingleOrAll()
  }, []);
  
  const checkSingleOrAll = () => { 
    // let match = useRouterMatch("/analytical/:type/:id");
    // console.log("match", match)
  }
  console.log(location.params.type)

  const [opt, setOpt] = useState({
    series: [{
      name: 'Net Profit',
      data: [56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [98, 87, 15, 91, 14, 94]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Hashtags', 'Documents', 'Insights', 'Notes', 'Projects', "Total"]
      },
      yaxis: {
        title: {
          text: 'Actions'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function () {
            return "$thousands"
          }
        }
      }
    },
  })

  return (
    <div>
      <Chart options={opt.options} series={opt.series} type="bar" height={350} />
    </div>
  );
}

export default SingleCompanyGraph;





