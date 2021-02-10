import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
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
      setCompanyInfo(<CompanyInfo />)
    } else if (location.params.type === 'all') { 
      setGraph(<AllCompanyGraph/>)
    }
  }

  return (
    <div className='container'>
      <h1>Analytical</h1> 
      <input className="search-input" placeholder="Search users"/>
      {companyInfo}
      {graph}
      {location.params.type === 'single' &&
      <AnalyticalUsers />}
    </div>
  );
}

export default Analytical;