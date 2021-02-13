import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

// to use this button component pass the tag 1 or 2 props 
// 1. type,         type can be 'user' or company =============> <GDPRDeleteButton type='company'/>
// 2. userEmail     if type is user pass a prop of user email with the users email. <GDPRDeleteButton type='user' userEmail='example@example.io'/>

const GDPRDeleteButton = (props) => {
  const [buttonProperties, setButtonProperties ] = useState(''); 
  const [buttonInputValue, setButtonInputValue ] = useState(''); 
  const singleCompanyData = useSelector((store) => store.singleCompanyData);

  useEffect(()=>{ 
    if(props.type==='company') { 
      setButtonProperties('btnI');
      setButtonInputValue(singleCompanyData.company);
    } else if(props.type==='user') { 
      setButtonProperties('coBtn');
      setButtonInputValue(props.userEmail);
    }
  }, []); 

  const deleteCompany = () => { 
    swal({
      title: 'Warning',
      text: 'GDPR Delete is irreversible, all company data including users, projects, and billing will be completely deleted. This action is final.',
      dangerMode: true,
      buttons: true,
    }).then(()=>
      swal({
        title: 'Final Warning',
        text: `Enter the ${buttonInputValue} to delete`,
        content: {
          element: "input"
        },
        // text: 'GDPR Delete is irreversible, all company data including users, projects, and billing will be completely deleted',
        dangerMode: true,
        buttons: true,
      })
    )
}
  return (
      <button 
        className={buttonProperties}
        onClick={deleteCompany}
        style={{marginLeft: '0px'}}
      >
        GDPR DELETE
      </button>
  );
}

export default GDPRDeleteButton;