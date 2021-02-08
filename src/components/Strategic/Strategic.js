import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Strategic() {
  const dispatch = useDispatch();
  const strategic = useSelector((redux) => redux.strategicGraph.strategicGraph);

  useEffect(() => {
    dispatch({ type: 'GET_PLAN_LENGTH_AVERAGE' })
  }, [])

  return (
    <div>
      <h1>Strategic</h1>
      
    </div>
  );
}

export default Strategic;