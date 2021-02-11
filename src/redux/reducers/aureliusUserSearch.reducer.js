const aureliusUserSearch = (state = [], action) => {
    switch (action.type) {
      case 'SET_AURELIUS_USERS_SEARCH':
        return action.payload;
      default:
        return state;
    }
};

export default aureliusUserSearch;