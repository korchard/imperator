import { combineReducers } from 'redux';

// store imperator data for the table
const imperator = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMPERATOR':
        return action.payload;
      default:
        return state;
    }
};

// const searchCompany = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_SEARCH':
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  imperator,
  // searchCompany,
});