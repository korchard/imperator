import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import GDPRDeleteButton from './GDPRDeleteButton';
import './Analytical.css';
import Swal from 'sweetalert2';

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const companyInfo = useSelector((store) => store.singleCompanyData);
  const [editMode, setEditMode] = useState(false);
  const [customerId, setCustomerId] = useState('');

  const editCustomerId = (companyName, initCustomerId, customerId) => {
    Swal.fire({
      title: 'Wait!',
      text: `Are you sure you want to change the Customer ID for ${companyName} from ${initCustomerId} to ${customerId}?`,
      icon: 'warning',
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
            'Success!',
            'Customer ID Updated',
            'success',
            false
        ) // end Swal IF
    dispatch({
      type: 'EDIT_CUSTOMER_ID',
      payload: {
        initCustomerId: companyInfo.billing.customerId,
        customerId: customerId,
        companyId: companyInfo._id,
      },
    });
    setEditMode(!editMode);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Customer ID not updated',
          'error',
          false
      )
  } //end else if
}) // end Swal .then
  };

  return (
    <>

      <div className='coTitle'>COMPANY: {companyInfo.company}</div>
      <div className='billingInfo'>
        <h4 className='billingHeader1'>BILLING INFORMATION</h4>
        <p>Plan: {companyInfo.billing?.plan} </p>
        <p>Status: {companyInfo.billing?.status}</p>
        {editMode ? 
          <>
            <input 
              onChange={(e) => setCustomerId(e.target.value)} 
              type='text' 
              />
            <button className="editBtn" onClick={() => editCustomerId(companyInfo.company, companyInfo.billing?.customerId, customerId)}>Edit ID</button>
            <button className="editBtn" onClick={() =>setEditMode(!editMode)}>Cancel</button>
          </> :
           <>Customer ID: {companyInfo.billing?.customerId}</>
        }
        {editMode ? null : 
            <button className="editBtn" onClick={() => setEditMode(!editMode)}>Update</button>
        }
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
  )
};

export default CompanyInfo;
