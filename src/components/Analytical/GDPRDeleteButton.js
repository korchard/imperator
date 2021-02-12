import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

const GDPRDeleteButton = (props) => {

  const [buttonProperties, setButtonProperties ] = useState(); 
  useSelector
  useEffect(()=>{ 
    if(props.type==='company') { 
      setButtonProperties({ 
        name: '', 
        buttonStyles
      })
    } else if(props.type==='user') { 
      setButtonProperties({ 
        name: '', 
        buttonStyles:''
      })
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
        text: `Enter the company name to delete`,
        content: {
          element: "input",
          attributes: {
            placeholder: "Company name",
            type: "password",
          },
        },
        // text: 'GDPR Delete is irreversible, all company data including users, projects, and billing will be completely deleted',
        dangerMode: true,
        buttons: true,
      })
    )
}
  return (
      <button className="btnI"
              onClick={deleteCompany}
      >
        GDPR DELETE
      </button>
  );
}

export default GDPRDeleteButton;