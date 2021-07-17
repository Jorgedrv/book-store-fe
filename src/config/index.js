const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-fe.herokuapp.com', 'https://course-book-store.herokuapp.com');

export default environmentUrls.get(window.location.hostname);