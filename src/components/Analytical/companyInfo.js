import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import GDPRDeleteButton from './GDPRDeleteButton';

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const [editMode, setEditMode] = useState(false);
  const [customerId, setCustomerId] = useState('');

  const editCustomerId = (customerId) => {
    dispatch({
      type: 'EDIT_CUSTOMER_ID',
      payload: {
        initCustomerId: companyInfo.billing.customerId,
        customerId: customerId,
        companyId: companyInfo._id,
      },
    });
    setEditMode(!editMode);
  };

  return (
    <>
      <div className='coTitle'>COMPANY: {companyInfo.company}</div>
      <div className='billingInfo'>
        <h4 className='billingHeader1'>BILLING INFORMATION</h4>
        <p>Plan: {companyInfo.billing?.plan} </p>
        <p>Status: {companyInfo.billing?.status}</p>
        {editMode ? (
          <>
            <input
              className='customEditInput'
              // value={companyInfo.billing?.customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              type='text'
            />
            <button
              className='planBtn'
              onClick={() => editCustomerId(customerId)}
            >
              Edit ID
            </button>
          </>
        ) : (
          <p className='customID'>
            Customer ID: {companyInfo.billing?.customerId}
          </p>
        )}
        {editMode ? null : (
          <button className='planBtn' onClick={() => setEditMode(!editMode)}>
            Update
          </button>
        )}
        <p>
          Active Until:{' '}
          <Moment format='MM/DD/YYYY'>{companyInfo.activeUntil}</Moment>
        </p>
        {companyInfo.jira && <p>Configuration: JIRA</p>}
        {companyInfo.zapier && <p>Configuration: ZAPIER</p>}
        <div className='gdprHolderCompany'>
          <GDPRDeleteButton type='company' />
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
