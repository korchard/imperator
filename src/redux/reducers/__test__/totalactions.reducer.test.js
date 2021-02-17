import totalActions from '../totalactions.reducer';

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

describe('Testing the totalActions Reducer', () => {
  test('test returns default state which is initState if it is not an action we assigned', () => {
    let action = { type: 'BAR' };
    expect(totalActions(initState, action)).toBe(initState);
  });

  test('test returns the action.payload if we send SET_TOTAL_ACTIONS', () => {
    let action = { type: 'SET_TOTAL_ACTIONS', payload: { data: 'woot' } };
    expect(totalActions(initState, action)).toEqual({ data: 'woot' });
  });
});

