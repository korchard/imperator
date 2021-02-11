import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts';

const PlanTypeGraph = () => {
  const dispatch = useDispatch();
  const planCount = useSelector((redux) => redux.planCount)
  const [year, setYear] = useState(2021)

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAN_COUNTS' })

  }, [])

  const [opt, setOpt] = useState({
    options: {
      chart: {
        height: 280,
        type: "donut",

      },
      series: [],
      plotOptions: {
        donut: {
          dataLabels: {
            total: {
              show: true,
              label: 'Total Plan Breakdown'
            }
          },
        },
      },
      colors: ['#2EA2B2', '#0B354D', '#EE5F1B', '#8a97a5dc'],
      labels: ['Pro', 'Premium', 'Enterprise', 'Trial']
    }
  })

  const planTotal = planCount.reduce((total, item) => {
    return total + item.count
  }, 0)

  const enterprisePercentage = (planCount[0]?.count / planTotal) * 100;
  const trialPercentage = (planCount[1]?.count / planTotal) * 100;
  const premiumPercentage = (planCount[2]?.count / planTotal) * 100;
  const proPercentage = (planCount[3]?.count / planTotal) * 100;

  return (
    <div>
      <Chart options={opt.options} series={
        [
          proPercentage,
          premiumPercentage,
          enterprisePercentage,
          trialPercentage
        ]
      }
        type='donut'
        width='100%'
        height='400'
      />
    </div>
  );
};

export default PlanTypeGraph;