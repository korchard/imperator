import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Moment from 'react-moment'
import GDPRDeleteButton from './GDPRDeleteButton';
import './Analytical.css'

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
      <div className="billingInfo" style={{marginLeft: '30px'}}>
        <h4 className="billingHeader1">Billing Information</h4>
        <p className='company-info-p'>Plan: {companyInfo.billing?.plan} </p>
        <p className='company-info-p'>Status: {companyInfo.billing?.status}</p>
        {editMode ? 
          <>
            <input 
              onChange={(e) => setCustomerId(e.target.value)} 
              type='text' 
              />
            <button className="editBtn" onClick={() => editCustomerId(customerId)}>Edit ID</button>
            <button className="editBtn" onClick={() =>setEditMode(!editMode)}>Cancel</button>
          </> :
           <>Customer ID: {companyInfo.billing?.customerId}</>
        }
        {editMode ? null : 
            <button className="editBtn" onClick={() => setEditMode(!editMode)}>Update</button>
        }
        <p className='company-info-p'>Active Until: <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment></p>
        {companyInfo.jira && 
          <p className='company-info-p'>Configuration: Jira</p> 
        }
        {companyInfo.zapier && 
          <p className='company-info-p'>Configuration: Zapier</p>
        }
        <div style={{marginTop: '40px'}}>
          <GDPRDeleteButton type='company'/>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;