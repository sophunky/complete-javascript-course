/* 
// VALUES AND VARIABLES LECTURE
let js = 'amazing';
// if (js == 'amazing') alert('JS is fun!');
console.log(40 + 8 + 23 - 10); // value is 63... value is the 

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
let PI = 3.1415;

// DATA TYPES LECTURE
console.log(typeof true);
let myName = 'Sophie';
myName = 'Is none of your business! Mind your own beeswax!!' // no let needed since the value is updated
let newVar;
console.log(newVar);
console.log(typeof newVar);

console.log(typeof null); // bug in JS that will never be fixed probably.. but is that it returns an object but should return null

// LET CONST VAR LECTURE
let age = 30;
age = 31; // reassigning and/or mutate a variable
const birthYear = 1990; // const declarations require an initial value

// BASIC OPERATORS
// math operators
const now = 2023;
const ageSophie = now - 1997; // minus operator
const ageJonas = now - 1991;
console.log(ageSophie, ageJonas);
console.log(ageJonas*2, ageJonas/2, 2**3);
const firstName = 'Sophie';
const lastName = 'Mittelstadt';
console.log(firstName + ' ' + lastName)

//assignment operators
let x = 10 + 5;
x += 10;
x ++;
x --;

// comparison operators
console.log(ageSophie > ageJonas);
console.log(ageSophie >= 18);
const isAdult = ageSophie >= 18;

// OPERATOR PRECEDENCE
const now = 2023;
const ageSophie = now - 1997; // minus operator
const ageJonas = now - 1991;

console.log(now - 1991 > now - 2018); // works because of precedence

let x, y; // we can declare more than one variable at a time
x = y = 25 - 10 - 5;
console.log(x,y);

const avgAge = (ageSophie + ageSophie) / 2;

// STRINGS AND TEMPLATE LITERALS
const firstName = 'James';
const job = "Carpenter";
const birthYear = 1980;
const year = 2023;
const james = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + '!'; // pain for long strings
console.log(james);
// template literal
const jamesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jamesNew);
// back ticks work for all strings
console.log(`any old string`);
// multi-lines w/ template literals -- no \n\ needed:
console.log(`String
multiple
lines`);

// TAKING DECISIONS: IF/ELSE STATEMENTS
const cindyAge = 15;
const isOldEnough = cindyAge >= 18;
if (isOldEnough) {
    console.log("Cindy can vote!");
}
else {
    const yearsLeft = 18 - cindyAge;
    console.log(`Cindy cannot vote yet. Wait another ${yearsLeft} years.`);
}

// TYPE CONVERSION AND COERCION
// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(Number("Hello")); // value is NaN (not a number)
// type coercion - JS does this automatically
console.log('23' - '10' - 3); // result is # because operator is restricted to numbers
console.log('23' + '10' + 3); // result is string because + operator works on strings and first value is a string
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);
*/


// EXERCISES!

// Values and Variables Exercises
const country = 'USA';
const continent = 'North America';
let population = 332000000;
console.log(country);
console.log(continent);
console.log(population);

// Data Types Exercises
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// let, const, var Exercises
language = 'English';

// Basic Operators Exercises
let populationHalf = population/2;
console.log(population++);
const finlandPopluation = 6000000;
console.log(population > finlandPopluation);
const averagePopluation = 33000000;
console.log(population > averagePopluation);
const description = country + " is in " + continent + " and its " + population + " people speak " + language;
console.log(description);

// Strings and Template Literals Exercises
const descriptionLiteral = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(descriptionLiteral);

// Taking Decisions: if / else Statements Exercises
if (population >= averagePopluation) {
    console.log(`${country}'s population is ${population - averagePopluation} above average.`)
}
else {
    console.log(`${country}'s population is ${averagePopluation - population} below average.`)
}

// Type Conversion and Coercion Exercises
/*
Predictions:
'9' - '5'; --> 4 (correct)
'19' - '13' + '17'; --> 23 (incorrect.. '617')
'19' - '13' + 17; --> 23 (correct)
'123' < 57; --> false (correct)
 5 + 6 + '4' + 9 - 4 - 2; --> 1143 (correct)
*/