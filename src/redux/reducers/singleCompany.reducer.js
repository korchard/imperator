// stores specific company's data info
const singleCompanyData = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SINGLE_COMPANY_DATA':
        return action.payload;
      default:
        return state;
    }
};
  
// singleCompanyData will be on the redux state at:
// state.singleCompanyData
export default singleCompanyData;