import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
import CompanyInfo from './companyInfo'
import './Analytical.css'

const Analytical = () => {
  const location = useRouteMatch();
  const dispatch = useDispatch();
  const [graph, setGraph] = useState()
  const [companyInfo, setCompanyInfo] = useState()
  const [search, setSearch] = useState();
  
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

  const searchAllUsers = () => {
      dispatch({ type: 'FETCH_AURELIUS_USER', payload: search })
  }

  return (
    <div className='flexbox4'>
      <div className='gridbox4'> 
        <div className="headerArea">
          <h1>Analytical</h1>
        </div>
        <div className="companyArea">
          {companyInfo}
        </div>
        <div className="userArea">
        {location.params.type === 'single' &&
          <>
          <input 
            className="search-input" 
            placeholder="Search users" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchAllUsers}>Search Aurelius</button>
          <AnalyticalUsers />
          </>
        }
        </div>
        <div className="barGraph2">
          {graph}
        </div>
      </div>
    </div>
  );
}

export default Analytical;