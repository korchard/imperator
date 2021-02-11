import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
import CompanyInfo from './companyInfo';
import './Analytical.css';
import AllUserSearch from './allUserSearch';
import swal from 'sweetalert';

const Analytical = () => {
  const location = useRouteMatch();
  const [graph, setGraph] = useState();
  const [companyInfo, setCompanyInfo] = useState();
  const [allUserSearch, setAllUserSearch] = useState();
 
  
  useEffect(() => {
    checkSingleOrAll()
  }, []);
  
  const checkSingleOrAll = () => { 
    if (location.params.type === 'single')   { 
      setGraph(<SingleCompanyGraph/>)
      setCompanyInfo(<CompanyInfo />)
    } else if (location.params.type === 'all') { 
      setGraph(<AllCompanyGraph/>)
      setAllUserSearch(<AllUserSearch />)
    }
  }

  const deleteCompany = () => { 
    swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        swal.fire({
          title: 'All done!',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  return (
    <div className='flexbox4'>
        <div className='gridbox4'> 
        <div className='headerArea'>
          <h1>Analytical</h1> 
          </div>
            <div className="userSearch">
              {allUserSearch}
            </div>
            <div className="companyArea">
              {companyInfo}
            </div>
            <div className="userArea">
              {location.params.type === 'single' &&
                <AnalyticalUsers />}
            </div>
            <div className="barGraph2">
              {graph}
            </div>
            <button className="btnI"
              onClick={deleteCompany}
            >GDPR DELETE</button>
          </div>
      </div>
  );
}

export default Analytical;