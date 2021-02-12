import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AnalyticalUsers = () => {
  const [users, setUsers] = useState('');
  const dispatch = useDispatch();
  const companyUsers = useSelector((redux) => redux.singleCompanyUsers);

  useEffect(() => {
    // dispatch({ type: 'FETCH_COMPANY_USERS' });
  }, []);

  return (
    <>
      <div className='userTitle'>User List for {companyUsers[0]?.company}</div>
      <ul>
        {companyUsers.map((user) => {
          return (
            <div className='userRoot' key={user.users_data._id}>
              <li className='userLi'>{user.users_data.name}</li>
              <li className='userLi'>{user.users_data.email}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default AnalyticalUsers;
