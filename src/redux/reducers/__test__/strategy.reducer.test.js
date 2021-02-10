import strategic from '../strategic.reducer';

const initState = { paidPlans: [], strategicGraph: [], trialPlans: [] };

describe('Testing the strategic Reducer', () => {
  test('test returns default state which is initState if it is not an action we assigned', () => {
    let action = { type: 'LIKE_A_BAR' };
    expect(strategic(initState, action)).toBe(initState);
  });

  test('test returns the action.payload if we send SET_PAID_PLANS', () => {
    let action = { type: 'SET_PAID_PLANS', payload: ['foo']};
    expect(strategic(initState, action)).toStrictEqual({paidPlans: ['foo'], strategicGraph: [], trialPlans: []});
  });

  test('test returns the action.payload if we send SET_TRIAL_PLANS', () => {
    let action = { type: 'SET_TRIAL_PLANS', payload: ['foo'] };
    expect(strategic(initState, action)).toStrictEqual({paidPlans: [], strategicGraph: [], trialPlans: ['foo']});
  });

  test('test returns the action.payload if we send SET_PLAN_LENGTH_AVERAGES', () => {
    let action = { type: 'SET_PLAN_LENGTH_AVERAGES', payload: ['foo'] };
    expect(strategic(initState, action)).toStrictEqual({paidPlans: [], strategicGraph: ['foo'], trialPlans: []});
  });
});
