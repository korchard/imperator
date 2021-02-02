import userReducer from './user.reducer.js';

describe('Testing the userReducer', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(userReducer(previousState, action)).toBe(previousState);
  });

  test('test it returns {} if we UNSET_USER', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'UNSET_USER' };
    expect(userReducer(previousState, action)).toEqual({});
  });

  test('test returns the action.payload if we SET_USER', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_USER', payload: { username: 'woot' } };
    expect(userReducer(previousState, action)).toEqual({ username: 'woot' });
  });
});
