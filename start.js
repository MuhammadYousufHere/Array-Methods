// Array
const petsNames = ["Heidi", "Chewy", "Buster", "Joey", "Gypsy"];

console.log(petsNames.length);
console.log((petsNames[2] = "snake"));
console.log(petsNames);

// forEach
// executes the func. once for every/each elements within an array
// doesn't mutate
petsNames.forEach((petName) => console.log(petName));
//
let scores = [22, 77, 88, 44, 66, 99];
const logScore = (score) => console.log("Score Over 65", score);
const res = scores.forEach((elem) => (elem > 65 ? logScore(elem) : null));

// sort
// Sorts data alphabetically
console.log(petsNames.sort());
// lowest to greatest
console.log(scores.sort((a, b) => a - b));
//  greatest to lowest
console.log(scores.sort((a, b) => b - a));
console.clear();
// reverse
// reverses the order but it mutates
const num = [1, 3, 4, 5, 6, 7, 8, 9];
// console.log(...num.reverse());
console.log(num);
// so
const newArr = [...num];
console.log(newArr.reverse());

// find() & findIndexOf()
// used only when you need to return a single value within arr
// returns the first element that passes the test
// find() returns 'undefined' ___ findIndex() returns '-1'
// NEED MORE VALUES? USE : FILTER()
// function( elem, i , arr)
const grades = [45, 46, 78, 55, 49, 50, 33, 59, 88, 71, 84, 90, 96];
const under80 = grades.find((elem) => elem < 80);
console.log(under80);
const over80 = grades.findIndex((elem) => elem > 80);
console.log(over80);

// Includes
const check = grades.includes(45);
console.log(check);
//
const vowels = ["a", "i", "e", "o", "u"];
const isIncludes = vowels.includes("i");
console.log(isIncludes);
// some() & every()
// return a boolean
const temp = [44, 56, 78, 88, 90, 55, 102, 104, 100];
const states = [
  "California",
  "New York",
  "New Jersey",
  "Alaska",
  "New Mexico",
  "Montana",
];

const someStates = states.some((state) => state.startsWith("New"));
const everyStates = states.every((state) => state.startsWith("New"));
console.log(someStates);
console.log(everyStates);

// Push & Pop

const sports = ["Cricket", "Soccer", "Hockey", "Polo", "Bowling"];
//
// added to the end
sports.push("Baseball");
console.log(sports.sort());
console.log(sports);

// removes last elements/index & don't pass args
console.log(sports.pop());
console.log(sports);

// Shift & Unshift
// Add and removes from start of an array

// Adds one or more
sports.unshift("Football", "Tennis");
console.log(sports);

// don't accept args
sports.shift();
console.log(sports);
