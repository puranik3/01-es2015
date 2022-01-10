// default export
/*export default */class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

// export default Person;

// named export
const NATIONALITY = 'Indian';
const DEFAULT_AGE = 18;

export {
    Person as default,
    NATIONALITY
}