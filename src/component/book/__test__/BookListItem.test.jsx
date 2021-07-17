import React from 'react';
import { render } from '@testing-library/react';
import BookListItem from '../BookListItem';
import { book } from '../../../mock/BookMock';

describe('BookList', () => {
    it('Should render', () => {
        const { getByText, getAllByText } = render(<BookListItem book={book} />);
        expect(getAllByText('test title')[0]).toBeInTheDocument();
        expect(getByText('description test')).toBeInTheDocument();
        expect(getByText('2021')).toBeInTheDocument();
    });
});