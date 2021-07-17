export const INITIAL_LOGIN_REDUCER_STATE = {
    token: window.localStorage.getItem('token'),
    promise: {
        isPending: false,
        isErrorOcurred: false,
        isSuccess: false
    },
    registerPromise: {
        isPending: false,
        isSuccess: false,
        isErrorOcurred: false,
    },
    user: null
};

const userReducer = (state = INITIAL_LOGIN_REDUCER_STATE, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                token: action.payload.token,
                promise: { isPending: false, isErrorOcurred: false, isSuccess: false }
            }
        }
        case 'PENDING': {
            return {
                ...state,
                promise: { isPending: true, isErrorOcurred: false, isSuccess: false },
                registerPromise: { isPending: true, isErrorOcurred: false, isSuccess: false }
            }
        }
        case 'SUCCESS': {
            return {
                ...state,
                promise: { isPending: true, isErrorOcurred: false, isSuccess: true },
                registerPromise: { isPending: true, isErrorOcurred: false, isSuccess: true }
            }
        }
        case 'ERROR': {
            return {
                ...state,
                promise: { isPending: false, isErrorOcurred: true, isSuccess: false },
                registerPromise: { isPending: false, isErrorOcurred: true, isSuccess: false }
            }
        }
        case 'REGISTER': {
            return {
                ...state,
                user: action.payload,
                registerPromise: { isPending: false, isErrorOcurred: false, isSuccess: false }
            }
        }
        case 'REGISTER_PENDING': {
            return {
                ...state,
                registerPromise: { isPending: true, isErrorOcurred: false, isSuccess: false }
            }
        }
        case 'REGISTER_SUCCESS': {
            return {
                ...state,
                registerPromise: { isPending: true, isErrorOcurred: false, isSuccess: true }
            }
        }
        case 'REGISTER_ERROR': {
            return {
                ...state,
                registerPromise: { isPending: false, isErrorOcurred: true, isSuccess: false }
            }
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
