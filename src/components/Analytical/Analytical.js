import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SingleCompanyGraph from './singleCompanyGraph';
import AllCompanyGraph from './allCompanyGraph';

const Analytical = () => {
  const location = useRouteMatch();
  const [graph, setGraph] = useState()
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
    <div>
      <h1>Analytical</h1> 
      <input className="search-input" placeholder="Search users"/>
      {graph}
    </div>
  );
}

export default Analytical;