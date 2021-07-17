import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import BookContainer from '../BookContainer';
import { bookListData } from '../../../mock/BookMock';
import { getBooksSelector, getBooksPromiseSelector } from '../../../module/book/bookSelector';

const mockChildComponent = jest.fn();

jest.mock('../BookList', () => ({props}) => {
  mockChildComponent(props);
  return <div>Mock book list component</div>;
});

jest.mock('../../../module/book/bookSelector');
describe('BookContainer', () => {
    it('Should render with redux', () => {
        getBooksSelector.mockImplementation(() => ({ type: 'BOOK_LIST', payload: bookListData }));
        getBooksPromiseSelector.mockImplementation(() => ({ promise: { isPending: false, isErrorOcurred: false } }));
        renderWithRedux(<BookContainer />, {});
        expect(mockChildComponent).toHaveBeenCalledTimes(2);
    });
    /*
    it('Should show loader when isPending is true', () => {
        getBooksSelector.mockImplementation(() => ({ type: 'PENDING' }));
        getBooksPromiseSelector.mockImplementation(() => ({ promise: { isPending: true, isErrorOcurred: false } }));
        const { getByTestId } = renderWithRedux(<BookContainer />, {});
        expect(getByTestId("book-loader")).toBeInTheDocument();
    });

    it('Should show error when isErrorOcurred is true', () => {
        getBooksSelector.mockImplementation(() => ({ type: 'ERROR' }));
        getBooksPromiseSelector.mockImplementation(() => ({ promise: { isPending: false, isErrorOcurred: true } }));
        const { getByText } = renderWithRedux(<BookContainer />, {});
        expect(getByText("Error message..")).toBeInTheDocument();
    });*/
});