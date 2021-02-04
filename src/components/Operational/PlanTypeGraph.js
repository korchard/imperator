import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts';

const PlanTypeGraph = () => {
  const dispatch = useDispatch();
  const planCount = useSelector((redux) => redux.planCount)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_PLAN_COUNTS' })

  }, [])

  const [opt, setOpt] = useState({
    options: {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [],
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: 'Total Plan Breakdown'
            }
          }
        }
      },
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
   
console.log(proPercentage);
  
  console.log('Plan Count redux', planCount)
  

  
  console.log('Plan total', planTotal)

  return (
    <div>
      <Chart options={opt.options} series={
        [
          proPercentage, 
          premiumPercentage,
          enterprisePercentage,
          trialPercentage
        ]
        } type='radialBar' width='600'/>
    </div>
  );
};

export default PlanTypeGraph;