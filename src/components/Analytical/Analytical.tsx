import React from 'react';
import SingleCompanyGraph from './singleCompanyGraph';

const Analytical = () => {
  return (
    <div>
      <h1>Analytical</h1> 
      <SingleCompanyGraph/>
      <input className="search-input" placeholder="Search users"/>
    </div>
  );
}

export default Analytical;