import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout', () => {
    it('Should render layout component', () => {
        const { getByText } = render(
            <Layout>
                <div>Test component</div>
            </Layout>
        );
        expect(getByText('Test component')).toBeInTheDocument();
    });
});