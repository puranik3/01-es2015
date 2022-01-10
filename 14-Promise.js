// ES2015 way of working with asynchronous code - eg. making calls to the backend to fetch data
import axios from 'axios';

// all axios.*() methods return a Promise object
// then() and catch() are 2 important methods of Promise class
// then() and catch() are "chainable" as they return Promise objects as well
// GET request
axios.get( `https://workshops-server.herokuapp.com/workshops` )
    .then(response => {
        const { data } = response;
        console.log( data );
    })
    .catch(error => {
        console.log( error.message );
    });