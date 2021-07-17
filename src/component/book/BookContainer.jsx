import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../module/book/bookAction';
import { getBooksSelector, getBooksPromiseSelector } from '../../module/book/bookSelector';
import BookFilter from './BookFilter';
import styles from './BookStyles';
import BookList from './BookList';

const BookContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch]);

    const books = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBooksPromiseSelector);

    const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList} ml={2}>
                { bookPromise.isPending && (
                    <Box ml={2}>
                        <Skeleton 
                            id="book-loader" 
                            variant="rect" 
                            animation="pulse" 
                            width="70%" 
                            height={200}
                        />
                    </Box>
                )}
                { bookPromise.isErrorOcurred && <div>Error message..</div> }
                <BookList books={books} />
            </Box>
        </Box>
    );
};

export default BookContainer;