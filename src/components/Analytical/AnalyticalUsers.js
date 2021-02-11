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
    <div className="userInfoContainer">
      <div className="userTitle">
        User List for {companyUsers[0]?.company}
      </div>
      <ul>
      {companyUsers.map(user => {
        return(
          <li key={user.users_data._id}>
            Name: {user.users_data.firstname} 
                  {user.users_data.lastname}
            Email: {user.users_data.email}</li>
      )})}
      </ul>
    </div>
  );
};

export default AnalyticalUsers;