import planCount from '../planCount.reducer';

describe('Testing the planCount Reducer', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(planCount(previousState, action)).toBe(previousState);
  });

  test('test returns the action.payload if we SET_PLAN_COUNT', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_PLAN_COUNT', payload: [4] };
    expect(planCount(previousState, action)).toEqual([4]);
  });
});