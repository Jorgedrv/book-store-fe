import { getBooksService, getBooksByTitleService } from './bookService';

export const getBooksAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'PENDING' });
        const books = await getBooksService();
        dispatch({
            type: 'BOOK_LIST',
            payload: books.data
        });
    } catch (error) {
        dispatch({ type: 'ERROR' });
    }
};

export const getBooksByTitleAction = (title) => async (dispatch) => {
    try {
        dispatch({ type: 'PENDING' });
        const books = await getBooksByTitleService(title);
        dispatch({
            type: 'BOOKS_BY_TITLE',
            payload: books.data
        });
    } catch (error) {
        dispatch({ type: 'ERROR' });
    }
};
