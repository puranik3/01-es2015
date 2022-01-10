// 2 old syntaxes

// syntax #1
function sum1( x, y ) {
    return x + y;
}

console.log( sum1( 12, 13 ) );

// syntax #2
const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );

// syntax #3 - arrow function
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum3( 12, 13 ) );

const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// the parenthesis around the single argument is optional
const square = x => x * x;

console.log( square( 12 ) );