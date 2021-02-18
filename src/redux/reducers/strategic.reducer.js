import { combineReducers } from 'redux';

// stores paid plans ending this month
const paidPlans = (state = [], action) => {
    switch (action.type) {
      case 'SET_PAID_PLANS':
        return action.payload;
      default:
        return state;
    }
};

// stores trial plans ending this month
const trialPlans = (state = [], action) => {
    switch (action.type) {
      case 'SET_TRIAL_PLANS':
        return action.payload;
      default:
        return state;
    }
};

// stores average plan length graph info
const strategicGraph = (state = [] , action) => {
    switch (action.type) {
      case 'SET_PLAN_LENGTH_AVERAGE':
        return action.payload;
      default:
        return state;
    }
  };
  
// strategic will be on the redux state at:
// state.strategic.paidPlans
// state.strategic.trialPlans
// state.strategic.strategicGraph
export default combineReducers({
  paidPlans,
  trialPlans,
  strategicGraph
});