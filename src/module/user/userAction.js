import { loginService, registerService } from './userService';

export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'PENDING' });
        const response = await loginService(email, password);

        window.localStorage.setItem('token', response.data.token);

        dispatch({
            type: 'LOGIN',
            payload: response.data
        });
        dispatch({type: 'SUCCESS'});
    } catch (error) {
        dispatch({ type: 'ERROR' });
    }
};

export const registerAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: 'REGISTER_PENDING' });
        const response = await registerService(user);
        dispatch({
            type: 'REGISTER',
            payload: {
                id: response.data,
                ...user
            }
        });
        dispatch({type: 'REGISTER_SUCCESS'});
    } catch (error) {
        dispatch({ type: 'REGISTER_ERROR' });
    }
};
