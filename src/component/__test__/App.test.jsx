import React from 'react';
import renderWithRedux from '../../util/testUtil';
import App from '../App';

jest.mock('../book/BookContainer', () => (props) => <div {...props} />);
describe('App component', () => {
    it('App test should render with error', () => {
        const { asFragment } = renderWithRedux(<App />, {});
        expect(asFragment()).toMatchSnapshot();
    });
});
