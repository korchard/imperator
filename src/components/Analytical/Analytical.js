import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
import CompanyInfo from './companyInfo'
import './Analytical.css'
import AllUserSearch from './allUserSearch'

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
      <AllUserSearch />
      {companyInfo}
      <div className="barGraph">
        {graph}
      </div>
      <div className="userSearch">
          <input 
            className="search-input" 
            placeholder="Search users" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button className="btnI" onClick={searchAllUsers}>Find</button>
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
      </div>
  );
}

export default Analytical;