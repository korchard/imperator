import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts';

// interface IPlanCount {
//   planCount: number
// }



const PlanTypeGraph: React.FC = () => {
  const dispatch = useDispatch();
  // const planCount = useSelector((redux: IPlanCount) => redux.planCount)
  const [opt, setOpt] = useState({
    options: {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [67, 84, 56, 61],
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

  return (
    <div>
      <Chart options={opt.options} series={opt.options.series} type='radialBar' width='600'/>
    </div>
  );
};
export default PlanTypeGraph;