import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AnalyticalUsers = () => {
 
  const [users, setUsers] = useState('');
  const dispatch = useDispatch();
  const companyUsers = useSelector((redux) => redux.singleCompanyUsers);

  useEffect(() => {
    // dispatch({ type: 'FETCH_COMPANY_USERS' });
  }, [])

  return (
    <div>
      <h2>User List for {companyUsers[0]?.company}</h2>
      {/* {JSON.stringify(companyUsers)} */}
      <ul>
      {companyUsers.map(user => {
        return(
          <li key={user.users_data._id}>Email: {user.users_data.email}</li>
      )})}
      </ul>
    </div>
  );
};

export default AnalyticalUsers;