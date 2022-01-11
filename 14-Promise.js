// ES2015 way of working with asynchronous code - eg. making calls to the backend to fetch data
import axios from 'axios';
import Person from './13-modules/Person.js';
import PersonCopy from './14-modules/Person.copy.js';

const person = new Person('John',23);
const personCopy = new PersonCopy('Mark',24);
person.celebrateBirthday();
personCopy.celebrateBirthday();

console.log( person );
console.log( personCopy );

// CommonJS syntax
// const axios = require( 'axios' );

// all axios.*() methods return a Promise object
// then() and catch() are 2 important methods of Promise class
// then() and catch() are "chainable" as they return Promise objects as well
// GET request
axios.get( `http://workshops-server.herokuapp.com/workshops` )
    .then(response => {
        const { data } = response;
        console.log( data ); // workshops

        return axios.get( `http://workshops-server.herokuapp.com/sessions` );
        // you do not need to call .then() here
    })
    .then(response => {
        const { data } = response;
        console.log( ' ***** ' );
        console.log( data ); // sessions
    })
    .catch(error => {
        console.log( error.message );
    });