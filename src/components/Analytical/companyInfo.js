import React from 'react';
import { useSelector} from 'react-redux';
import Moment from 'react-moment'

const CompanyInfo = () => {
  const companyInfo = useSelector((store) => store.singleCompanyData);

console.log('CompanyInfo', companyInfo
)
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
          {companyInfo.jira && 
          <div className='configInfo'>
           <div>Jira Information:</div> 
           <div>Token: {companyInfo.jira.api_token}</div> 
           <div>Domain: {companyInfo.jira.domain} </div>
           <div>Email: {companyInfo.jira.email}</div>
        </div>
          }
          {companyInfo.zapier && 
          <div className='configInfo'>
           Zapier Information: 
           Token: {companyInfo.zapier.api_token} 
           Domain: {companyInfo.zapier.domain} 
           Email: {companyInfo.zapier.email}
        </div>
          }
        </div>
    </div>
  );
}

export default CompanyInfo;