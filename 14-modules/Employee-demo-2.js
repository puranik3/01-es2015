import Employee from '../13-modules/Employee.js';
import Person from './Person.copy.js';

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.celebrateBirthday();

console.log( john );