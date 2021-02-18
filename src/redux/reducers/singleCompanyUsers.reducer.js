// stores a specific company's users
const singleCompanyUsers = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_COMPANY_USERS':
        return action.payload;
      default:
        return state;
    }
};

// singleCompanyUsers will be on the redux state at:
// state.singleCompanyUsers
export default singleCompanyUsers;