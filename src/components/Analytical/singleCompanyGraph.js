import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chart from 'react-apexcharts';

const SingleCompanyGraph = () => {

  useEffect(() => {
    checkSingleOrAll()
  }, []);

const checkSingleOrAll = () => { 
  const { name } = useParams();
  console.log('checking source', name); 
}

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
            return "$ " + 1 + " thousands"
          }
        }
      }
    },
  })

  return (
    <div>
      {JSON.stringify(name)}
      <Chart options={opt.options} series={opt.series} type="bar" height={350} />
    </div>
  );
}

export default SingleCompanyGraph;





