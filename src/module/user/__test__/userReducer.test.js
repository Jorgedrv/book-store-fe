import userReducer, { INITIAL_LOGIN_REDUCER_STATE } from '../userReducer';
import { reducerState } from '../../../mock/UserMock';

describe('User reducer', () => {
    it('should return new state for login user action', () => {
        const action = {
            type: 'LOGIN',
            payload: {
                token: 'jwt token'
            },
            user: null
        }
        const newState = userReducer(INITIAL_LOGIN_REDUCER_STATE, action);
        expect(newState).toEqual(reducerState);
    });
});