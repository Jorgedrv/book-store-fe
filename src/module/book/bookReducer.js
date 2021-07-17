export const INITIAL_BOOK_REDUCER_STATE = {
    books: [],
    promise: {
        isPending: false,
        isErrorOcurred: false
    }
};

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {  
    switch(action.type) {
        case 'BOOK_LIST': {
            return {
                ...state,
                books: action.payload,
                promise: { isPending: false, isErrorOcurred: false }
            }   
        }
        case 'BOOKS_BY_TITLE': {
            return {
                ...state,
                books: action.payload,
                promise: { isPending: false, isErrorOcurred: false }
            }   
        }
        case 'PENDING': {
            return {
                ...state,
                promise: { isPending: true, isErrorOcurred: false }
            }
        }
        case 'ERROR': {
            return {
                ...state,
                promise: { isPending: false, isErrorOcurred: true }
            }
        }
        default: {
            return state;
        }
    }
};

export default bookReducer;
