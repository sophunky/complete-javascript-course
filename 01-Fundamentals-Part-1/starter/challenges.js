/**
CODING CHALLENGE #1:
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;
const markBMI = markMass / ( markHeight ** 2 );
const johnBMI = johnMass / ( johnHeight ** 2 );
const markHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log(markHigherBMI);

/*
CODING CHALLENGE #2:
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
 */
if (markBMI > johnBMI) {
        console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else if (markBMI == johnBMI) {
        console.log(`Mark and John have the same BMI!`)
}
else {
        console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

/*
CODING CHALLENGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
if (dolphinsAvg > koalasAvg) console.log(`Dolphins won the competition!`);
else if (dolphinsAvg < koalasAvg) console.log(`Koalas won the competition!`);
else console.log(`Koalas and Dolphins tied!`);
//bonus1
const dolphinsAvg2 = (97 + 112 + 81) / 3;
const koalasAvg2 = (109 + 95 + 86) / 3;
if (dolphinsAvg2 >= 100 && (dolphinsAvg2 > koalasAvg2)) {
        console.log(`Dolphins won the competition!`);
} else if (koalasAvg2 >= 100 && (dolphinsAvg2 < koalasAvg2)) {
        console.log(`Koalas won the competition!`);
} else console.log(`it's a draw!`);
//bonus2
//bonus1
if (dolphinsAvg2 >= 100 && (dolphinsAvg2 > koalasAvg2)) {
        console.log(`Dolphins won the competition!`);
} else if (koalasAvg2 >= 100 && (dolphinsAvg2 < koalasAvg2)) {
        console.log(`Koalas won the competition!`);
} else if (dolphinsAvg2 >= 100 && (dolphinsAvg2 === koalasAvg2)) {
        console.log(`It's a draw!`);
} else {
        console.log(`No one wins.`);
}

/*
CODING CHALLENGE #4:
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)