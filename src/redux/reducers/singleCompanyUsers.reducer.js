const singleCompanyUsers = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_COMPANY_USERS':
        return action.payload;
      default:
        return state;
    }
};

export default singleCompanyUsers;