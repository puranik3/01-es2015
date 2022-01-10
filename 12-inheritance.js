class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
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

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.celebrateBirthday();

console.log( john );