// stores total actions graph info
const initState = {
  Total_Companies: 0,
  documents: {
    count: 0,
  },
  hashtags: {
    count: 0,
  },
  insights: {
    count: 0,
  },
  notes: {
    count: 0,
  },
  projects: {
    count: 0,
  },
};

const totalActions = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_ACTIONS':
      return action.payload;
    default:
      return state;
  }
};

// totalActions will be on the redux state at:
// state.totalActions
export default totalActions;
