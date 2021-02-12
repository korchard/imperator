import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Moment from 'react-moment'
import GDPRDeleteButton from './GDPRDeleteButton';

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const [editMode, setEditMode] = useState(false)
  const [customerId, setCustomerId] = useState('')  

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
        <div className="billingInfo">
          <h4 className="billingHeader">Billing Information</h4>
            <p className='company-info-p'>Plan: {companyInfo.billing?.plan} </p>
            <p className='company-info-p'>Status: {companyInfo.billing?.status}</p>
            {editMode ? 
              <>
                <input 
                  // value={companyInfo.billing?.customerId} 
                  onChange={(e) => setCustomerId(e.target.value)} 
                  type='text' 
                  />
                <button className="coBtn" onClick={() => editCustomerId(customerId)}>Edit ID</button>
              </> :
                <p className='company-info-p'>Customer ID: {companyInfo.billing?.customerId}</p>
            }
            {editMode ? null : 
                <button className="coBtn" onClick={() => setEditMode(!editMode)}>Update</button>
            }
            <p className='company-info-p'>Active Until: <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment></p>
        </div>
        <div className='configInfo'>
        <h4 className="billingHeader">Configurations</h4>
          {companyInfo.jira && 
          <>
            <p className='company-info-p'>Jira Information:</p> 
             <p className='company-info-p'>Token: {companyInfo.jira.api_token}</p>  
             <p className='company-info-p'>Domain: {companyInfo.jira.domain}</p> 
             <p className='company-info-p'>Email: {companyInfo.jira.email}</p> 
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
  );
}

export default CompanyInfo;