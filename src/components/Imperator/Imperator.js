import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, Link } from 'react-router-dom';

import './Imperator.css';

const Imperator = () => {

  const dispatch = useDispatch();
  const imperator = useSelector((redux) => redux.imperator)

  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' })
  }, [])

  return (
    <div className="imperator">
     <h1>Imperator</h1>
     <div className="search-imperator">
        <input className="search-input" placeholder="Search"/>
          <button className='btnI' type='submit' name='submit' value='Find'>
            Find
          </button>
        </div>
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
           {JSON.stringify(imperator)}
          {/* {imperator.map((data) => {
            <tr key={data.id}>
              <td>{data.company}</td>
              <td>{data.billing.plan}</td>
              <td>{data.activeUntil}</td>
              <td>{data.company}</td>
            </tr>
          })} */}
         </tbody>
       </table>
     </div>
    </div>
  );
}

export default Imperator;