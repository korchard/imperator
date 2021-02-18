// stores data for the table
const imperator = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMPERATOR':
      return action.payload;
    default:
      return state;
  }
};

// imperator will be on the redux state at:
// state.imperator
export default imperator;
