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
    dispatch({ type:'GET_TRIAL_PLANS' });

  }, [])

  return (
    <div className="strategic">
      <h1>Strategic</h1>
      <StrategicGraph/>
      <div className="listContainer">
        <div className="paidContainer">
          <h4>Paid Plans Ending This Month</h4>
          {paidPlan.map(plan => {
            return (
              <p>{plan.company}</p>
            )
          }
          )}
        </div>

        <div className="trialContainer">
          <h4>Trials Ending This Month</h4>
          {trialPlan.map(plan => {
            return (
              <p>{plan.company}</p>
            )
          }
          )}
        </div>

      </div>
    </div>
  );
}

export default Strategic;

