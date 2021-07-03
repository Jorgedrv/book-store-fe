const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('course-book-store.herokuapp.com', 'https://course-book-store.herokuapp.com');

console.log('LOCATION: ', window.location.hostname);

export default environmentUrls.get(window.location.hostname);