import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts';

interface IPlanCount {
  planCount: number
}


const PlanTypeGraph: React.FC = () => {
  const dispatch = useDispatch();
  const planCount = useSelector((redux: IPlanCount) => redux.planCount)

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAN_COUNTS' })
  }, [])

  return (
    <div>

    </div>
  );
};
export default PlanTypeGraph;