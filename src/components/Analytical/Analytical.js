import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import CompanyInfo from './companyInfo'
import './Analytical.css'

const Analytical = () => {
  const location = useRouteMatch();
  const [graph, setGraph] = useState()
  const [companyInfo, setCompanyInfo] = useState()
  useEffect(() => {
    checkSingleOrAll()
  }, []);
  
  const checkSingleOrAll = () => { 
    if (location.params.type === 'single')   { 
      setGraph(<SingleCompanyGraph/>)
    } else if (location.params.type === 'all') { 
      setGraph(<AllCompanyGraph/>)
    }
  }



  return (
    <div className='container'>
      <h1>Analytical</h1> 
      <input className="search-input" placeholder="Search users"/>
      <CompanyInfo />
      {graph}
    </div>
  );
}

export default Analytical;