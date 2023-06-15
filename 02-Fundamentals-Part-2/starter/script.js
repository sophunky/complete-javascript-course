/**
 // ACTIVATING STRICT MODE
 strict mode forbids us from doing certain things
 and gives extra error reporting in console
  
 let hasDriversLicense = false;
 const passTest = true;
 if (passTest) hasDriverLicense = true; // error.. example of what strict mode does in the console


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
 */

 'use strict'; // activates script mode.. has to be first code in file
