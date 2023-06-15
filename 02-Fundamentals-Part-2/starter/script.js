/**
 // ACTIVATING STRICT MODE
 strict mode forbids us from doing certain things
 and gives extra error reporting in console
  
 let hasDriversLicense = false;
 const passTest = true;
 if (passTest) hasDriverLicense = true; // error.. example of what strict mode does in the console

'use strict'; // activates script mode.. has to be first code in file

// FUNCTIONS
function logger () {
    // inside of function is called a function buddy
    console.log("My name is Sophie");
    // use function anytime you need to reuse code
}
// calling/running/invoking function are interchangeable words

// function w/ parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// FUNCTION DECLARATIONS VS. EXPRESSIONS

// function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function(birthYear){ // anonymous function b/c it's nameless
    return 2023 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// reminder: expressions produce values
// in JS, functions are values and so they can be stored in variables

// ARROW FUNCTIONS
// shorter version of function expression
const calcAge3 = birthYear => 2023-birthYear;
// ideal for simple one line functions
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023-birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Julie'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/