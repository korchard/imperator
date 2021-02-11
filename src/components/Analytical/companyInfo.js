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
          <h4 className="billingHeader">Billing Information</h4>
        <div className="billingInfo">
            Plan: {companyInfo.billing?.plan} 
              <br></br>
            Status: {companyInfo.billing?.status}
              <br></br>
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
              <br></br>
            Active Until: <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment>
        </div>
        <div className='configInfo'>
        <h4 className="configHeader">Configurations</h4>
          {companyInfo.jira && 
          <>
            Jira Information:<br></br> 
            Token: {companyInfo.jira.api_token}<br></br> 
            Domain: {companyInfo.jira.domain}<br></br>
            Email: {companyInfo.jira.email}<br></br>
            </>
          }
          {companyInfo.zapier && 
          <>
            Zapier Information: 
            Token: {companyInfo.zapier.api_token} 
            Domain: {companyInfo.zapier.domain} 
            Email: {companyInfo.zapier.email}
           </>
          }
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;