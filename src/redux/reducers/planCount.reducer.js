
// store user message information 
const planCount = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAN_COUNT':
            return action.payload;
        default:
            return state;
    }
}



export default planCount;
