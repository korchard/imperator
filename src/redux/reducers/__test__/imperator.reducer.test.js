import imperator from '../imperator.reducer';

describe('Testing the imperator Reducer', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(imperator(previousState, action)).toBe(previousState);
  });

  test('test returns the action.payload if we SET_IMPERATOR', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_IMPERATOR', payload: [{company: 'TEST_CO'}, {company: 'TEST_CO2'}]};
    expect(imperator(previousState, action)).toStrictEqual([{company: 'TEST_CO'}, {company: 'TEST_CO2'}]);
  });
});