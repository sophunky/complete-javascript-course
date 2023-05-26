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
*/





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
console.log(population > finlandPopluation);
const description = country + " is in " + continent + " and its " + population + " people speak " + language;
console.log(description);