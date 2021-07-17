import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from '../bookReducer';
import { book, reducerState } from '../../../mock/BookMock';

describe('BookReducer', () => {
    it('Should return new state for book list', () => {
        const action = {
            type: 'BOOK_LIST',
            payload: book
        }
        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        expect(newState).toEqual(reducerState);
    });

    it('Should return new state for book list by title', () => {
        const action = {
            type: 'BOOKS_BY_TITLE',
            payload: book
        }
        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        expect(newState).toEqual(reducerState);
    });
});