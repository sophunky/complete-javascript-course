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

// TRUTHY AND FALSY
// falsy values: will be false if converted to boolean -- 5 of them: 0, "", undefined, null, NaN
// all values that aren't falsy are truthy
const money = 0;
if (money) { // JS converts variable to boolean according to truthy/falsy rules
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job.`);
}

let height = 123;
if (height) { // problem -- height is 0.. we have to add another filter
    console.log(`Yay height is defined!`);
} else {
    console.log(`Height is undefined.`);
}

// EQUALITY OPERATORS == VS ===
const age = 18;
//strict
if (age === 18) console.log(`You just became an adult`); // true
if (age === '18') console.log(`You just became an adult`); // false
// loose
if (age == 18) console.log(`You just became an adult`); // true
if (age == '18') console.log(`You just became an adult`); // true
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
if ( favorite === 23 ) {
    console.log(`Nice! 23 is a cool number.`);
} else if ( favorite === 8 ) {
    console.log(`Oh no 8 is not great.`);
} 

// LOGICAL OPERATORS
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense && hasGoodVision); // false
console.log(!hasDriversLicense || hasGoodVision); // true
const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive) {
    console.log(`Sarah can drive`)
}
else console.log(`Sarah should not drive`)

// THE SWITCH STATEMENT
const day = 'monday';
switch(day) {
    case 'monday': // day === 'monday'
        console.log("grocery shop");
        console.log("do coding");
        break;
    case 'tuseday':
        console.log("dance");
        console.log("cook dinner");
        break; // without break, code below continues executing regardless if next case is met.
    case 'wednesday':
    case 'thursday': // back to back means the same will execute for wednesday & thursday
        console.log("work hard");
        break;
    case 'friday':
    case 'saturday':  
    case 'sunday':    
        console.log("enjoy the weekend");
        break;
    default: // basically an 'else' block
        console.log("not a valid day");
}

// STATEMENTS AND EXPRESSIONS
// expressions produce a value (ex: 3+4, true && false)
// statements don't produce a value but execute an action (ex: if/else statement, switch statement)
// console.log can only hold expressions, not statements

// THE CONDITIONAL (TERNARY) OPERATOR
const age = 23;
// if else in one line: use ternary operator
age >= 18 ? console.log('I like to drink wine.'): console.log('I like to drink water.');

// used more as an expression not a statement
const drink = age >= 18 ? "wine": "water";
console.log(`I like to drink ${drink}.`);

console.log(`I like to drink ${age >= 18 ? "wine": "water"}`);
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

// Equality Operators: == vs. === Exercises
//const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
const numNeighbors = 1;
if (numNeighbors === 1) console.log(`Only 1 border!`)
else if (numNeighbors > 1) console.log(`More than 1 border`)
else console.log(`No borders`);

// Logical Operators Exercises
if ((language === 'English') && (population < 50000000) && !isIsland) {
    console.log(`Come move to the ${country}!`)
} else console.log(`${country} does not meet your criteria :(`);

// The switch Statement Exercises
const lang = 'chinese';
switch(lang) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place in number of native speakers');
        break;
    case 'hindi':
        console.log('4th place in number of native speakers');
        break;
    case 'arabic':
        console.log('5th place in number of native speakers');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator Exercises
console.log(`${country}'s population is ${population >= 33000000? 'above': 'below'} average.`)