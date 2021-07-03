import React from 'react';
import axios from 'axios';
import baseUrl from './config';

const App = () => {
    console.log(baseUrl);
    axios(`${baseUrl}/api/v1/books`).then(books => {
        console.log(books);
    });
    return <div>My first app, let's staterd</div>;
};

export default App;