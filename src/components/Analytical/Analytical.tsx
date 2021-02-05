import React from 'react';
import SingleCompanyGraph from './singleCompanyGraph';

const Analytical = () => {
  return (
    <div>
      <h1>Analytical</h1> 
      <input className="search-input" placeholder="Search users"/>
      <SingleCompanyGraph/>
    </div>
  );
}

export default Analytical;