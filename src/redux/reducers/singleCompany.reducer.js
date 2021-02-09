import { combineReducers } from 'redux';

// store imperator data for the table
const singleCompanyData = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SINGLE_COMPANY_DATA':
        return action.payload;
      default:
        return state;
    }
};

const singleCompanyUsers = (state = [], action) => {
  switch (action.type) {
    case 'SET_SINGLE_COMPANY_USERS':
      return action.payload;
    default:
      return state;
  }
};
  
const singleCompanyData = combineReducers({
  singleCompanyData,
  singleCompanyUsers,
});

export default singleCompanyData;