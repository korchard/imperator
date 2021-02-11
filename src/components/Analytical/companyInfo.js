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
        <div className='coTitle'>
          Company: {companyInfo.company}
        </div>
        <div className='planInfo'>
          Plan: {companyInfo.billing?.plan}
          Status: {companyInfo.billing?.status}
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
          <>Customer ID: {companyInfo.billing?.customerId}</>
        }
        {editMode ? null : 
            <button onClick={() => setEditMode(!editMode)}>Update</button>
        }
            Active Until: <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment>
          {companyInfo.jira && 
        <div className='configInfo'>
           Jira Information:<br></br> 
           Token: {companyInfo.jira.api_token}<br></br> 
           Domain: {companyInfo.jira.domain}<br></br>
           Email: {companyInfo.jira.email}<br></br>
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
    </div>
  );
}

export default CompanyInfo;