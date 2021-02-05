import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, Link } from 'react-router-dom';
import Moment from 'react-moment';
// import Pagination from './Pagination';
import Table from './Table';

import './Imperator.css';

const Imperator = ({ columns, data}) => {

  const dispatch = useDispatch();
  const imperator = useSelector((redux) => redux.imperator.imperator);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_IMPERATOR' })
  }, [])

  const configurations = (imperator) => {
    if (imperator.jira && imperator.zapier) {
      return <td>jira, zapier</td>
    } else if (imperator.jira && !imperator.zapier) {
      return <td>jira</td>
    } else if (imperator.zapier && !imperator.jira) {
      return <td>zapier</td>
    }
  }

  const searchCo = () => {
    dispatch({ type: 'FETCH_COMPANY_SEARCH', payload: search });
    console.log('search', search);
    setSearch('');
  }



  return (
    <div className="imperator">
     <h1>Imperator</h1>
     <div className="search-imperator">
        <input className="search-input" placeholder="Search" value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <button className='btnI' type='submit' 
                  name='submit' value='Find'
                  onClick={searchCo}>
                  Find
          </button>
        </div>
     <div>
       {/* <h3>Company Information</h3> */}
       <Table data={imperator}/> 
       {/* <table > */}
         {/* <thead>
           <th>Name</th>
           <th>Billing Plan</th>
           <th>Billing Status</th>
           <th>Active Until</th>
           <th>Configurations</th>
           <th>Total Projects</th>
           <th>Total Notes</th>
           <th>Total Users</th>
           <th>Creation Date of Last Project</th>
         </thead> */}
         {/* <tbody>
          {imperator.map(data => {
            return (
              <tr key={data.id}>
                <td>{data.company}</td>
                <td>{data.plan}</td>
                <td>{data.status}</td>
                <td>
                  <Moment format="MM/DD/YYYY">
                    {data.activeUntil}
                  </Moment>
                </td>
                <>{configurations(data)}</>
                <td>working on it</td>
                <td>don't have it yet</td>
                <td>working still</td>
                <td>not yet</td>
              </tr>
            )
          })}
         </tbody>
       </table> */}

     </div>
    </div>
  );
}

export default Imperator;