// stores......
const usersByMonth = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS_BY_MONTH':
      return action.payload;
    default:
      return state;
  }
};

// usersByMonth will be on the redux state at:
// state.usersByMonth
export default usersByMonth;
