import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Moment from 'react-moment'

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const [editMode, setEditMode] = useState(false)
  const [customerId, setCustomerId] = useState('')
  
  
  console.log('CompanyInfo', companyInfo)

  const editCustomerId = (customerId) => {
    dispatch({ 
      type: 'EDIT_CUSTOMER_ID', 
      payload: {
        initCustomerId: companyInfo.billing.customerId,
        customerId: customerId, 
        companyId: companyInfo._id
      }})
    setEditMode(!editMode)
  }

  return (
    <div className='companyInfoContainer'>
        <div className='companyInfoHeader'>
          <div>Company: {companyInfo.company}</div>
        </div>
        <div className='planInfo'>
          <div>Plan: {companyInfo.billing?.plan}</div>
          <div>Status: {companyInfo.billing?.status}</div>
        </div>
        <div className='customerInfo'>
        {editMode ? 
          <>
          <input 
            // value={companyInfo.billing?.customerId} 
            onChange={(e) => setCustomerId(e.target.value)} 
            type='text' 
            />
          <button onClick={() => editCustomerId(customerId)}>Edit ID</button>
          </> :
          <div>Customer ID: {companyInfo.billing?.customerId}</div>  
        }
        {editMode ? null : 
            <button onClick={() => setEditMode(!editMode)}>Update</button>
        }
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