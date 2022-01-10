if( true ) {
    var x = 10;
    let y = 20;
}

console.log( x );
// console.log( y ); // error

const john = {
    name: 'John'
};

// error - cannot reassign
// john = {
//     name: 'Jonathan'
// };

// property values can still be changed
john.name = 'Jonathan';

console.log( john );