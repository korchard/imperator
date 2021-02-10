import singleCompanyUsers from '../singleCompany.reducer';

describe('Testing the singleCompanyUsers', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(singleCompanyUsers(previousState, action)).toBe(previousState);
  });

  test('test returns the action.payload if we SET_SINGLE_COMPANY_USERS', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_SINGLE_COMPANY_USERS', payload: [{company: 'woot'}, {company:'doubleWoot'}] };
    expect(singleCompanyUsers(previousState, action)).toEqual( [{company: 'woot'}, {company:'doubleWoot'}] );
  });
});