import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

// to use this button component pass the tag 1 or 2 props
// 1. type,         type can be 'user' or company =============> <GDPRDeleteButton type='company'/>
// 2. userEmail     if type is user pass a prop of user email with the users email. <GDPRDeleteButton type='user' userEmail='example@example.io'/>

const GDPRDeleteButton = (props) => {
  const [buttonProperties, setButtonProperties] = useState('');
  const [buttonInputValue, setButtonInputValue] = useState('');
  const singleCompanyData = useSelector((store) => store.singleCompanyData);

  useEffect(() => {
    if (props.type === 'company') {
      setButtonProperties('gdprBtnCompany');
      setButtonInputValue(singleCompanyData.company);
    } else if (props.type === 'user') {
      setButtonProperties('gdprBtnUser');
      setButtonInputValue(props.userEmail);
    }
  }, []);

  const deleteCompany = () => {
    Swal.fire({
      title: 'Wait!',
      text: `Are you sure you want to delete this company permanently?`,
      icon: 'warning',
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
  }).then((result) => {
      if (result.value) {
          Swal.fire(
              'Success!',
              'Company permanently deleted',
              'success',
              false
          ) // end Swal IF
          // TODO - This is the skeleton for the GDPR delete from the db with a sweetalert2
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
              'Cancelled',
              'Company not deleted',
              'error',
              false
          )
      } //end else if
  }) // end Swal .then
  };
  return (
    <button className={buttonProperties} onClick={deleteCompany}>
      GDPR DELETE
    </button>
  );
};

export default GDPRDeleteButton;
