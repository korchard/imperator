
const strategicGraph = (state = [] , action) => {
    switch (action.type) {
      case 'SET_PLAN_LENGTH_AVERAGE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default strategicGraph;