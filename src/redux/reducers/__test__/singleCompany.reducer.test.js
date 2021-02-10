import singleCompanyData from '../singleCompany.reducer';

describe('Testing the singleCompanyData', () => {
  test('test returns default state if it is not an action we assigned', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'BAR' };
    expect(singleCompanyData(previousState, action)).toBe(previousState);
  });

  test('test returns the action.payload if we SET_SINGLE_COMPANY_DATA', () => {
    let previousState = { something: 'foo' };
    let action = { type: 'SET_SINGLE_COMPANY_DATA', payload: {company: 'woot'} };
    expect(singleCompanyData(previousState, action)).toStrictEqual( {company: 'woot'} );
  });
});