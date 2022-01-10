const outer = function() {
    console.log( 'outer this = ', this ); // { name : 'John' }

    // old syntax used - this -> global / window
    const innerOld = function() {
        console.log( 'innerOld this = ', this ); // window in browser / global in Node
    };

    innerOld();

    // arrow functions DO NOT have their own "this". It borrows its "this" from the enclosing scope (i.e. outer function)
    const innerNew = () => {
        console.log( 'innerNew this = ', this ); // { name : 'John' }
    };

    innerNew();
};

outer.call( { name: 'John' } ); // this -> { name: 'John' }