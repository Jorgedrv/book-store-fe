import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('App test should render with error', () => {
        const { asFragment } = render(<App/>);
        expect(asFragment()).toMatchSnapshot();
    });
});