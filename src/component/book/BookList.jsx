import React from 'react';
import Proptypes from 'prop-types';
import styles from './BookStyles';
import { Box } from '@material-ui/core';
import BookListItem from './BookListItem';

const BookList = ({ books }) => {
    const classes = styles();

    return (
        <Box className={classes.bookList} ml={2}>
            {books.map(book => (
                <BookListItem book={book} key={book.id} />
            ))}
        </Box>
    );
};

BookList.propTypes = {
    books: Proptypes.arrayOf({
        id: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    }).isRequired
};

export default BookList;