import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Moment from 'react-moment'

const CompanyInfo = () => {
  const location = useRouteMatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const dispatch = useDispatch();

  // let subStart = new Date(34535645 * 1000);
  // console.log('Sub start', subStart)
  
  

console.log('CompanyInfo', companyInfo.activeUntil)
  return (
    <div>
        <div className='companyInfoHeader'>
          <div>Company: {companyInfo.company}</div>
        </div>
        <div className='planInfo'>
          <div>Plan: {companyInfo.billing?.plan}</div>
          <div>Status: {companyInfo.billing?.status}</div>
        </div>
        <div className='customerInfo'>
          <div>Customer ID: {companyInfo.billing?.customerId}</div>
            <button>Update</button>
          <div>
            Active Until: <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment>
          </div>
        </div>
    </div>
  );
}

export default CompanyInfo;