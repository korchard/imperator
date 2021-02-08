import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const CompanyInfo = () => {
  const location = useRouteMatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const dispatch = useDispatch();
  

console.log('CompanyInfo', companyInfo)
  return (
    <div>
        <h1>AYE COMPANY INFO</h1>
        <div>{companyInfo.name}</div>
    </div>
  );
}

export default CompanyInfo;