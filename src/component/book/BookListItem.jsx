import React from 'react';
import Proptypes from 'prop-types';
import styles from './BookStyles';
import { Box, Paper, Avatar, Typography } from '@material-ui/core';

const BookListItem = ({ book }) => {
    const classes = styles();
    return(
        <Box mb={2}>
            <Paper elevationbn={2} className={classes.bookListItemPaper}>
                <Avatar variant="square" className={classes.bookImage}>{book.title}</Avatar>
                <Box ml={1}>
                    <Typography variant="h5">{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.releaseYear}</Typography>
                </Box>
            </Paper>
        </Box>
    );
}; 

BookListItem.propTypes = {
    book: Proptypes.shape({
        id: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    }).isRequired
};

export default BookListItem;