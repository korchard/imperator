import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

const SingleCompanyGraph = () => {
  
  // const monthlyUsersOverTime = useSelector(
  //   (redux) => redux.monthlyUsersOverTime
  // );
  const dispatch = useDispatch();
  const [opt, setOpt] = useState({
    series: [{
      name: 'Average company',
      data: [98, 87, 15, 91, 14, 94]
    }, 
    {
      name: 'Average company',
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
  }
  )


  return (
    <div>
      <Chart options={opt.options} series={opt.series} type="bar" height={350} />
    </div>
  );
}

export default SingleCompanyGraph;





