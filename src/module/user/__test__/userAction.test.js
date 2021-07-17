import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { loginAction, registerAction } from '../userAction';

const middleware = [reduxThunk];
const mockStore = configureStore(middleware);
jest.mock('axios');

describe('User Action', () => {
    beforeEach(() => {
        axios.post.mockImplementation(() => Promise.resolve({
            data: {
                token: 'jwt token'
            }
        }));
    });

    it('Should abre to dispatch and save in local storage', async () => {
        const store = mockStore({});
        await store.dispatch(loginAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
            type: 'LOGIN',
            payload: {
                token: 'jwt token'
            }
        });
    });

    it('Should abre to dispatch error action', async () => {
        const store = mockStore({});
        axios.post.mockImplementation(() => {
            throw new Error();
        });    
        await store.dispatch(loginAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'ERROR'
        });
    });

    it('should dispatch user action', async () => {
        const store = mockStore({});
    
        axios.post.mockImplementation(() => {
          return Promise.resolve({
            data: 'some uuid',
          });
        });
    
        await store.dispatch(
          registerAction({
            name: 'name',
            email: 'email',
            password: 'password',
          })
        );
        const actions = store.getActions();
    
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
          type: 'REGISTER',
          payload: {
            id: 'some uuid',
            name: 'name',
            email: 'email',
            password: 'password',
          },
        });
      });
});