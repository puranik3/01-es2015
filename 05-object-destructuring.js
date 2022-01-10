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
    age : yearsOld,
    address : {
        city, 
        state
    },
    emails: [
        firstEmail
    ]
} = john;
console.log( name, yearsOld, city, state, firstEmail );

function printAddress( { city, state, country }, name ) {
    // const { city, state, country } = address;

    console.log( `Name of person is ${name}` );
    console.log( `City = ${city}` );
    console.log( `State = ${state}` );
    console.log( `Country = ${country}` );
}

printAddress({
    city: 'Trivandrum',
    state: 'Kerala',
    country: 'India'
}, 'John' );