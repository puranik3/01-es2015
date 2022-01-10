import Human, { NATIONALITY } from './Person.js';

class Employee extends Human {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    // override the base class method
    celebrateBirthday() {
        super.celebrateBirthday(); // call the base class implementation
        console.log( `Happy birthday ${this.name}!` );
    }
}

export {
    Employee as default
};