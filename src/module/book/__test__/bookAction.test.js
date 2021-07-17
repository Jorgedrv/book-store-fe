import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { getBooksAction, getBooksByTitleAction } from '../bookAction';
import { book } from '../../../mock/BookMock';

const middleware = [reduxThunk];
const mockStore = configureStore(middleware);
jest.mock('axios');

describe('Books Action', () => {
    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: book
        }));
    });

    it('Should abre to dispatch book list success action', async () => {
        const store = mockStore({});
        await store.dispatch(getBooksAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'BOOK_LIST',
            payload: book
        });
    });

    it('Should abre to dispatch book by title success action', async () => {
        const store = mockStore({});
        await store.dispatch(getBooksByTitleAction('Test title'));
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'BOOKS_BY_TITLE',
            payload: book
        });
    });

    it('Should abre to dispatch error action', async () => {
        const store = mockStore({});
        axios.get.mockImplementation(() => {
            throw new Error();
        });    
        await store.dispatch(getBooksByTitleAction('Test title'));
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'ERROR'
        });
    });
});