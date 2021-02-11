import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
import CompanyInfo from './companyInfo'
import './Analytical.css'

const Analytical = () => {
  const location = useRouteMatch();
  const dispatch = useDispatch();
  const userSearch = useSelector((store) => store.aureliusUserSearch)
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
      setSearch('')
  }

  console.log('Search Results', userSearch);

  return (
    <div className='container'>
      <h1>Analytical</h1> 
      <input 
        className="search-input" 
        placeholder="Search users" 
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchAllUsers}>Search Aurelius</button>
      {companyInfo}
      <div className="barGraph">
        {graph}
      </div>
      {location.params.type === 'single' &&
      <AnalyticalUsers />}
    </div>
  );
}

export default Analytical;