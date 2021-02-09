import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StrategicGraph from './StrategicGraph';

import './Strategic.css';

function Strategic() {
  const dispatch = useDispatch();
  const strategic = useSelector((redux) => redux.strategicGraph.strategicGraph);

  useEffect(() => {
    dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' })
  }, [])

  return (
    <div className="strategic">
      <h1>Strategic</h1>
      <StrategicGraph/>
      <div className="listContainer">
        <div className="paidContainer">
          <h4>Paid Plans Ending This Month</h4>
        </div>

        <div className="trialContainer">
          <h4>Trials Ending This Month</h4>
        </div>

      </div>
    </div>
  );
}

export default Strategic;

