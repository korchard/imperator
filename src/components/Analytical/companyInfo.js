import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const CompanyInfo = () => {
  const location = useRouteMatch();
  const totalActionData = useSelector((store) => store.totalAction);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'FETCH_SINGLE_COMPANY_DATA', param: location.id });
  }, []); 

console.log('CompanyInfo', totalActionData)
  return (
    <div>
        <h1>AYE COMPANY INFO</h1>
    </div>
  );
}

export default CompanyInfo;