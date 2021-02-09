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
    </div>
  );
}

export default Strategic;

