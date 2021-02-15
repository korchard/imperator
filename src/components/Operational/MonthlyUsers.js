import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

export const MonthlyUsers = () => {
  const [year, setYear] = useState(2021)
  const monthlyUsersOverTime = useSelector(
    (redux) => redux.monthlyUsersOverTime
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersByMonth();
  }, [year]);

  const [user, setUser] = useState({});

  const getUsersByMonth = () => {
    dispatch({ type: 'GET_USERS_BY_MONTH', payload: { year: year } });
  };

  const [opt, setOptions] = useState({
    options: {
      // plotOptions: {
      //   donut: {
      //     dataLabels: {
      //       total: {
      //         show: true,
      //         label: 'Total Plan Breakdown'
      //       }
      //     },
      //   },
      // },
      series: [
        {
          name: `Added Users By Month (${year})`,
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
      colors: ['#2EA2B2'],
    },
  });

  const monthsData = monthlyUsersOverTime;

  return (
    <>
      <div style={{ textAlign: "left", padding: '10px' }}>
        <select className="pagSelect"
          onChange={e => {
            setYear(e.target.value)
          }}
        >
          {
            [2021, 2020, 2019, 2018, 2017, 2016, 2015].map((year) =>
              <option value={year}>{year}</option>
            )
          }
        </select>
      </div>
      <Chart
        options={opt.options}
        series={[
          {
            ...opt.options.series,
            name: `Added Users By Month (${year})`,
            data: monthsData,
          },
        ]}
        type='area'
        width='99%'
        height='350'
      />

    </>
  );
};
