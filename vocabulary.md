JS BUILT-IN FUNCTIONS
- console.log() - function to access developer console
- alert() - pop-up function
- Number() - converts strings to numbers
- String() - converts numbers to strings
- prompt() - pull input from user

OPERATORS
- typeof: returns data type
- math operators: plus +, minus -, multiply *, to the power **, divide /, remainder %
- assignment operators: =, increment value +=, -=, *=, /=, increment by 1 ++, decrement by 1 --
- comparison operators: >, <, >=, <=
- == operator: loose equality operator, does type coercion
- === operator: strict equality operator, no type coercion
- != operator: loose does not equal operator, does type coercion
- !== operator: strict does not equal operator, no type coercion
- boolean operators: and &&, or ||, not !

TERMS TO KNOW
- value: smallest unit of information in JS, either an object or a primitive value
- variable: a box that we can store a value inside
- label: another word for variable name
- object
- primitive: data type - 7 of them: number, string, boolean, undefined, null, symbol, BigInt
- number: floating point numbers (used for decimals & ints)
- string: sequence of characters (used for text)
- boolean: logical value, true or false
- undefined: value taken by var not yet defined ('empty value')
- null: also means 'empty value'
- symbol: value that's unique and unchangeable
- BigInt: larger ints than number type can hold
- dynamic typing: in JS, datatypes are determined automatically and don't need to be declared
- variables don't have types in JS, the value has a type (ie variable x can be a number and then later redefined as a string)
- mutating: updating value of a variable
- let: mutable variable declaration (only needed for the first declaration, not when updating value)
- const: immutable variable declaration
- var: old variable declaration (avoid using)
- operator: allows us to combine multiple values (many diff. types of operators)
- template literals: easy way of defining complex strings -- uses back ticks and references fields with ${}, also supports multi-line strings
- type conversion: specific conversion from one type to another
- NaN: not a number, aka invalid number but it is of type number
- type coercion: conversion of type to match another value's type.. JS does this automatically
- falsy values: will be false if converted to boolean -- 5 of them: 0, "", undefined, null, NaN
- switch statement: alternative to if/else, good to use when there are many options & you need to check for equality
- expressions: produce a value
- statements: don't produce a value but execute actions
- ternary operator: condition? if: else; the ternary operator is useful whenn used as an expression
- strict mode

CONVENTIONS
- write mutable variable names in camel-case
- don't start variable names with an upper case
- write constant variables in all caps
- var variable dec. should be avoided 

RULES
- variable names can only have letters, numbers, the $ and underscores and can't start w/ #s

KEYBOARD SHORTCUTS:
- 

BEST PRACTICES:
- declare variables as constants unless you're positive their value will need to change
- use strict === operator rather than loose == operator (pretend == doesn't exist)
- use strict !== operator rather than loose != operator 