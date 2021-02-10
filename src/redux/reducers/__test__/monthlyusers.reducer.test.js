import monthlyUsersOverTime from '../monthlyusers.reducer';

describe('Testing the monthlyusersReducer', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(monthlyUsersOverTime(previousState, action)).toBe(previousState);
  });

  test('test returns the action.payload if we SET_MONTHLY_USERS', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_MONTHLY_USERS', payload: [12] };
    expect(monthlyUsersOverTime(previousState, action)).toEqual([12]);
  });
});