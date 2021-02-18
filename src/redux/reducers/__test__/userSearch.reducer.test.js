import aureliusUserSearch from '../aureliusUserSearch.reducer';

describe('Testing the aureliusUserSearch Reducer', () => {
    test('test returns default state which is initState if it is not an action we assigned', () => {
        let initState = { something: 'foo' };
        let action = { type: 'BAR' };
        expect(aureliusUserSearch(initState, action)).toBe(initState);
    });
  
    test('test returns the action.payload if we send SET_AURELIUS_USERS_SEARCH', () => {
        let initState = { something: 'foo' };
        let action = { type: 'SET_AURELIUS_USERS_SEARCH', payload: { data: 'woot' } };
        expect(aureliusUserSearch(initState, action)).toEqual({ data: 'woot' });
    });

    test('test returns the initState if we send CLEAR_USER_SEARCH', () => {
        let initState = [];
        let action = { type: 'CLEAR_USER_SEARCH' };
        expect(aureliusUserSearch(initState, action)).toStrictEqual(initState);
    });
});