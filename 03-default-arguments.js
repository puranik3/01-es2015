function greet( message = 'Hello', name = 'world' ) {
    console.log( `${message} ${name}!` );
}

greet( 'Hello', 'world' );
greet( 'Hello' ); // name has default value
greet( 'Hello', 'John' );
greet( 'Bye', 'John' );
greet(); // 2 defaults
greet( undefined, 'John' ); // message has default value