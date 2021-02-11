import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StrategicGraph from './StrategicGraph';

import './Strategic.css';

function Strategic() {
  const dispatch = useDispatch();
  const strategic = useSelector((redux) => redux.strategic.strategicGraph.strategicGraph);
  const paidPlan = useSelector((redux) => redux.strategic.paidPlans);
  const trialPlan = useSelector((redux) => redux.strategic.trialPlans);

  useEffect(() => {
    dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' });
    dispatch({ type: 'GET_PAID_PLANS' });
    dispatch({ type: 'GET_TRIAL_PLANS' });
  }, [])

  return (
    <div className="flexbox">

      <div className="gridbox">
        <div className="headerArea">
          <h1>Strategic</h1>
        </div>

        <div className="strategicGraph">
          <h4 className="titles">Average Plan Length By Types</h4>
          <StrategicGraph />
        </div>

        <div className="paidContainer">
          <h4 className="titles">Paid Plans Ending This Month</h4>
          {paidPlan.map(plan => {
            return (
              <p className="col2">{plan.company}<span className="col1">{plan.month}/{plan.day}/{plan.year}</span></p>
            )
          }
          )}
        </div>

        <div className="trialContainer">
          <h4 className="titles">Trials Ending This Month</h4>
          {trialPlan.map(plan => {
            return (
              <p className="col2">{plan.company} <span className="col1">{plan.month}/{plan.day}/{plan.year}</span></p>
            )
          }
          )}
        </div>

      </div>
    </div>
  );
}

export default Strategic;

