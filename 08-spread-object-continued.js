const john = {
    name: 'John', // primitive
    age: 32, // primitive
    emails: [ // non-primitive
        'john@example.com',
        'john@gmail.com'
    ],
    address: { // non-primitive
        city: 'Trivandrum',
        state: 'Kerala'
    }
};

const johnEmployment = {
    name: 'Jonathan',
    company: 'Quest Global',
    experience: 10
};

// primitive properties are copied by value (number, boolean, string) - name, age
// non-primitive properties are copied by reference (objects, arrays) - emails, address
const johnCopy = {
    ...john,
    ...johnEmployment,
    spouse: 'Jane'
};

console.clear();

const johnDeepCopy = {
    ...john, // name and age are proper copies
    emails: [ ...john.emails ], // since this is an array of primitives (strings) this is a proper copy
    address: {
        ...john.address
    }
};

johnDeepCopy.age++; // DOES NOT affect john.age
johnDeepCopy.address.city = 'Thiruvananthapuram'; // john.address is a different object from johnDeepCopy.address - DOES NOT affect
johnDeepCopy.emails.push( 'john@yahoo.com' ); // this is a DIFFERENT array - DOES NOT affect

console.log( john );
console.log( johnDeepCopy );