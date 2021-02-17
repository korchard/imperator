import { useSelector } from 'react-redux';
import GDPRDeleteButton from './GDPRDeleteButton';

// a list of users within the company currently displayed on the analytical page
const AnalyticalUsers = () => {
  const companyUsers = useSelector((redux) => redux.singleCompanyUsers);
  return (
    <>
      <div className='userTitle'>USER LIST FOR {companyUsers[0]?.company}</div>
      <ul>
        {companyUsers.map((user) => {
          return (
            <div className='userRoot' key={user.users_data._id}>
              <li className='userLi'>{user.users_data.name}</li>
              <li className='userLi'>{user.users_data.email}</li>
              <li className='userLi'>
                <GDPRDeleteButton
                  type='user'
                  userEmail={user.users_data.email}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default AnalyticalUsers;
