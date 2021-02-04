import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

export const MonthlyUsers = () => {
    
  const dispatch = useDispatch(); 

  useEffect(() => {
    getUsersByMonth(); 
  }, []);

  const getUsersByMonth = () => { 
    console.log('getting users by month');
    dispatch({type: 'GET_USERS_BY_MONTH'});
  }

  const [opt, setOptions] = useState({
    options: {
        series: [{
            name: "Added Users By Month",
            data: [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 1, 2]
      }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Added Users By Month',
            align: 'center'
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
      }
  })
  
  return (
    <div>
      <Chart options={opt.options} series={opt.options.series} type='area' width='600'/>
    </div>
  );
};

