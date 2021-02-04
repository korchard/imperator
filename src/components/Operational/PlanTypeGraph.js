import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts';

// interface IPlanCount {
//     planCount: {
//       _id: string, 
//       count: number
//     }
// }

// type planCountObject = {
//     _id: string,
//     count: number
// }

// interface IPlanCount {
//   planCount: {
//    _id: string, 
//    count: number      
// }
// }

const PlanTypeGraph = () => {
  const dispatch = useDispatch();
  const planCount = useSelector((redux) => redux.planCount)
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

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAN_COUNTS' })
  }, [])

  console.log('Plan Count redux', planCount)

  // let planTotal = planCount[0].count


  const planTotal = planCount.reduce((total, item) => {
    return total + item.count
  }, 0)

  console.log('Plant total', planTotal)

  // const addTotal = (planCount: {_id: string, count: number}): number => {
  //   let total: number = 0;
  //   for (let item of planCount) {
  //     total += item.count
  //   }
  //   return total;
  // }

  // let enterpriseTotal = 

  // let proPercent = enterpriseTotal / planTotal


  // const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// Get total years for all companies 
// const planTotal = planCount.reduce((total, plan) => {
//     return total + (company.end - company.start)
// }, 0)



// let plans = planCount.reduce(function(a, b){ return a + b; }); 
// console.log('plans are', plans);

  return (
    <div>
      <Chart options={opt.options} series={opt.options.series} type='radialBar' width='600'/>
    </div>
  );
};

export default PlanTypeGraph;