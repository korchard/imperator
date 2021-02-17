import './Analytical.css';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllUserSearch from './allUserSearch';
import AllCompanyGraph from './allCompanyGraph';
import AnalyticalUsers from './AnalyticalUsers';
import CompanyInfo from './companyInfo';

const Analytical = () => {
  const location = useRouteMatch();
  const [graph, setGraph] = useState();
  const [companyInfo, setCompanyInfo] = useState();
  const [allUserSearch, setAllUserSearch] = useState();

  useEffect(() => {
    checkSingleOrAll();
  }, []);

  const checkSingleOrAll = () => {
    if (location.params.type === 'single') {
      setGraph(<SingleCompanyGraph />);
      setCompanyInfo(<CompanyInfo />);
      setAllUserSearch(<AllUserSearch />);
    } else if (location.params.type === 'all') {
      setGraph(<AllCompanyGraph />);
    }
  };

  return (
    <div>
      <div className='flexbox4'>
        <div className='gridbox4'>
          <div className='headerArea'>
            <h1>Analytical</h1>
          </div>
          <div className='userSearch'>{allUserSearch}</div>
          <div className='companyArea'>{companyInfo}</div>
          {location.params.type === 'single' ? (
            <div className='userArea'>
              {location.params.type === 'single' && <AnalyticalUsers />}
            </div>
          ) : null}
          {/* TODO need to add a way to load some type of data or hide the page */}
          <div className='barGraph2'>{graph}</div>
        </div>
      </div>
    </div>
  );
};

export default Analytical;
