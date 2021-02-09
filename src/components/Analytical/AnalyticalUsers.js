import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AnalyticalUsers = () => {
 
  const [users, setUsers] = useState('');
  const dispatch = useDispatch();
  const companyUsers = useSelector((redux) => redux.singleCompanyUsers);

  useEffect(() => {
    dispatch({ type: 'FETCH_COMPANY_USERS' });
  }, [])

  return (
    <div>
      <h2>User List</h2>
      <ul>
      {companyUsers.map(user => {
          <li key={user._id}>{user.email}</li>
      })}
      </ul>
    </div>
  );
};

export default AnalyticalUsers;