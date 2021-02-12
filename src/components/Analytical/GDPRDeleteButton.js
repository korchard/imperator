import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

const GDPRDeleteButton = (props) => {
  const [buttonProperties, setButtonProperties ] = useState(''); 
  const [buttonInputValue, setButtonInputValue ] = useState(''); 
  const singleCompanyData = useSelector((store) => store.singleCompanyData);

  useEffect(()=>{ 
    if(props.type==='company') { 
      setButtonProperties('btnI');
      setButtonInputValue(singleCompanyData.company)
    } else if(props.type==='user') { 
      setButtonProperties('coBtn');
      setButtonInputValue(singleCompanyData.company)
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
        text: `Enter the ${singleCompanyData.company} to delete`,
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
      >
        GDPR DELETE
      </button>
  );
}

export default GDPRDeleteButton;