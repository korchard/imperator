import { combineReducers } from 'redux';

// store user message information
const usersByMonth = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS_BY_MONTH':
      return action.payload;
    default:
      return state;
  }
};

export default usersByMonth;
