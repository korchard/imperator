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

  const configurations = () => {
    if (imperator.jira && imperator.zapier === true) {
      return 'jira, zapier'
    } else if (imperator.jira === true && imperator.zapier === false) {
      return 'jira'
    } else if (imperator.zapier === true && imperator.jira === false) {
      return 'zapier'
    }
  }

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
          {imperator.map(data => {
            return (
              <tr key={data.id}>
                <td>{data.company}</td>
                <td>{data.billing.plan}</td>
                <td>{data.activeUntil}</td>
                <>
                  <td>{configurations()}</td>
                </>
                  {/* {data.jira && data.zapier ? 
                    <td>jira, zapier</td> :
                  data.jira ?
                    <tc>jira</tc> :
                  data.zapier && 
                  <tc>zapier</tc>
                  } */}
                <td>working on it</td>
                <td>don't have it yet</td>
                <td>working still</td>
                <td>not yet</td>
              </tr>
            )
          })}
         </tbody>
       </table>
     </div>
    </div>
  );
}

export default Imperator;