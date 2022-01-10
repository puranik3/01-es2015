// rest operator
// ...

// array destructuring
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

const [ first, second, ...restOfDays ] = days;

console.log( first, second, restOfDays );

const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@example.com',
        'john@gmail.com'
    ],
    address: {
        city: 'Trivandrum',
        state: 'Kerala'
    }
};

// const name = john.name, yearsOld = john.age, firstEmail = john.emails[0], city = john.address.city, state = john.address.state;
const {
    name,
    address : {
        city,
        ...restOfAddress
    },
    ...restOfJohnDetails
} = john;
console.log( name, city, restOfJohnDetails, restOfAddress );