// stores monthly users graph info
const monthlyUsersOverTime = (state = [], action) => {
    switch (action.type) {
      case 'SET_MONTHLY_USERS':
        return action.payload;
      default:
        return state;
    }
};
  
// monthlyUsersOverTime will be on the redux state at:
// state.monthlyUsersOverTime
export default monthlyUsersOverTime;