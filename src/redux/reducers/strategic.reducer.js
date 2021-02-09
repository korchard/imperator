import { combineReducers } from 'redux';

// store paid plans ending this month
const paidPlans = (state = [], action) => {
    switch (action.type) {
      case 'SET_PAID_PLANS':
        return action.payload;
      default:
        return state;
    }
};

// store trial plans ending this month
const trialPlans = (state = [], action) => {
    switch (action.type) {
      case 'SET_TRIAL_PLANS':
        return action.payload;
      default:
        return state;
    }
};

const strategicGraph = (state = [] , action) => {
    switch (action.type) {
      case 'SET_PLAN_LENGTH_AVERAGE':
        return action.payload;
      default:
        return state;
    }
  };
  


export default combineReducers({
  paidPlans,
  trialPlans,
  strategicGraph
});