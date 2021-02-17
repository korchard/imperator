// stores user email search results
const aureliusUserSearch = (state = [], action) => {
    switch (action.type) {
      case 'SET_AURELIUS_USERS_SEARCH':
        return action.payload;
      case 'CLEAR_USER_SEARCH':
        return state = [];
      default:
        return state;
    }
};

// aureliusUserSearch will be on the redux state at:
// state.aureliusUserSearch
export default aureliusUserSearch;