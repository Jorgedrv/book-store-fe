import React from 'react';
import { render } from '@testing-library/react';
import BookList from '../BookList';
import BookListItem from '../BookListItem';
import { bookListData } from '../../../mock/BookMock';

jest.mock('../BookListItem');
describe('BookList', () => {
    it('Should render', () => {
        BookListItem.mockImplementation(() => <div>booklistitem comp</div>);
        render(<BookList books={bookListData.books} />);
        expect(BookListItem).toHaveBeenCalledTimes(1);
        expect(BookListItem).toHaveBeenCalledWith({ book: bookListData.books[0] }, {});
    });
});