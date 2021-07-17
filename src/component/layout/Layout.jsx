import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <Box>
            <Box>
                <Header />
            </Box>
            <Box mt={8} ml={5}>
                {children}
            </Box>
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;