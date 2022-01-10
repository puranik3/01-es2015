// spread (used mainly for copying arrays and objects)
// ...

const nums1 = [ 1, 2, 3 ], nums2 = [ 4, 5, 6 ];

// spread the array items with commas in between
// const nums1Copy = [ nums1[0], nums1[1], nums1[2] ];
const nums1Copy = [ ...nums1 ];
console.log( nums1Copy );

const numsCombined = [ ...nums1, ...nums2 ]; // [ 1, 2, 3, 4, 5, 6 ]

console.clear();

// primitives are copied by value (number, boolean, string)
// non-primitives are copied by reference (objects, arrays)
nums1Copy[0]++; // changing the first item DOES NOT AFFECT the first item in the original array, i.e. num1

console.log( nums1 ); // first item is 1
console.log( nums1Copy ); // first items is 2

const persons = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Mark', age: 40 }
];

// objects will be copied by reference
// const personsCopy = [ persons[0], persons[1], persons[2] ];
const personsCopy = [ ...persons ];

// The items within persons and personsCopy arrays are the SAME!
personsCopy[0].age++; // same as persons[0].age++

console.log( persons );
console.log( personsCopy );

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

// primitive properties are copied by value (number, boolean, string) - name, age
// non-primitive properties are copied by reference (objects, arrays) - emails, address
const johnCopy = {
    ...john
};

console.clear();

johnCopy.age++; // DOES NOT affect john.age
johnCopy.address.city = 'Thiruvananthapuram'; // john.address refers to the SAME object is memory as johnCopy.address
johnCopy.emails.push( 'john@yahoo.com' ); // this is SAME as pushing to john.emails (the array is shared between john and johnCopy)

console.log( john );
console.log( johnCopy );