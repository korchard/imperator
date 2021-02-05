// store imperator data for the table
const monthlyUsersOverTime = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_COMPANY_DATA':
        return action.payload;
      default:
        return state;
    }
};
  
export default monthlyUsersOverTime;