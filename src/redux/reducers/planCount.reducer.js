// stores plan count total graph
const planCount = (state = [] , action) => {
  switch (action.type) {
    case 'SET_PLAN_COUNT':
      return action.payload;
    default:
      return state;
  }
};

// planCount will be on the redux state at:
// state.planCount
export default planCount;
