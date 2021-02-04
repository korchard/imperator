import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, Link } from 'react-router-dom';

const Imperator = () => {

  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' })
  }, [])

  return (
    <div >
     <h1>Imperator</h1>
     <input className="search-bar"/>
     <button>Find</button>
     <div>
       <h3>Company Information</h3>
       <table>
         <thead>
           <th>Name</th>
           <th>Billing Status</th>
           <th>Active Until</th>
           <th>Configurations</th>
           <th>Total Projects</th>
           <th>Total Notes</th>
           <th>Total Users</th>
           <th>Creation Date of Last Project</th>
         </thead>
         <tbody>

         </tbody>
       </table>
     </div>
    </div>
  );
}

export default Imperator;