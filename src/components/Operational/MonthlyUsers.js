import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

export const MonthlyUsers = () => {
  const monthlyUsersOverTime = useSelector(
    (redux) => redux.monthlyUsersOverTime
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersByMonth();
  }, []);

  const [user, setUser] = useState({});

  const getUsersByMonth = () => {
    dispatch({ type: 'GET_USERS_BY_MONTH' });
  };

  const [opt, setOptions] = useState({
    options: {
      series: [
        {
          name: 'Added Users By Month',
          data: [],
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Added Users By Month',
        align: 'center',
      },
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  });

  const monthsData = monthlyUsersOverTime;

  return (
    <div>
      <Chart
        options={opt.options}
        series={[
          {
            ...opt.options.series,
            data: monthsData,
          },
        ]}
        type='area'
        width='600'
      />
    </div>
  );
};
