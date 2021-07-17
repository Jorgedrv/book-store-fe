import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import Login from '../Login';
import { fireEvent, waitFor } from '@testing-library/dom';
import { loginAction } from '../../../module/user/userAction';

jest.mock('../../../module/user/userAction');
describe('Login test', () => {
    it('should show required error message for email and password', async () => {
        const { findByText } = renderWithRedux(<Login />, {});

        const submitButton = await findByText('Login');
        fireEvent.submit(submitButton);

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
    });

    it('should show email and password invalid error message', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});

        const emailField = getByLabelText('Enter email address');
        const passwordField = getByLabelText('Enter password');

        fireEvent.change(emailField, { target: { value: 'invalid email' } });
        fireEvent.change(passwordField, { target: { value: 'wrongP' } });

        const submitButton = await findByText('Login');
        fireEvent.submit(submitButton);

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Password should be 8 char length')).toBeInTheDocument();
    });

    it('should call login when email and password are valid', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});
        loginAction.mockImplementation(() => (dispatch) => { });

        const emailField = getByLabelText('Enter email address');
        const passwordField = getByLabelText('Enter password');

        fireEvent.change(emailField, { target: { value: 'emailtest@gmail.com' } });
        fireEvent.change(passwordField, { target: { value: 'validPassword' } });

        const submitButton = await findByText('Login');
        fireEvent.submit(submitButton);

        await waitFor(() => {
            expect(loginAction).toHaveBeenCalledWith(
                'emailtest@gmail.com',
                'validPassword'
            );
        });
    });
});

