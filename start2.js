// map
// Creates a new array based on the function applied to each elements in the array you are iterating through
const allGrades = [23, 55, 66, 78, 43, 73, 65, 33, 93, 67, 94];

const letUsAdd = allGrades.map((grade) => {
  const sum = grade + 5;
  return sum;
});
console.log(letUsAdd);

// filter
// Creates a new based on whether or not elements pass the test provided by the function provided

// arr.filter(function(elem, i , arr),thisArg)

const groceries = [
  { item: "apples", type: "fruit" },
  { item: "curd", type: "dairy" },
  { item: "milk", type: "dairy" },
  { item: "mangoes", type: "fruit" },
];

const fruits = groceries.filter((thing) => thing.type === "fruit");
console.log(fruits);

// Reduce

// it execute A REDUCER function against each item in an array, returning a single value called accumulator/total.

// arr.reduce(function (accumulator, currentValue, index, array), initialValue)

const bills = [23.4, 334, 44, 43, 444, 220];
const totalBills = bills.reduce((total, bill) => total + bill);
console.log("Total", totalBills);

// flatMap()

// returns a new arr by applying a callback func to each item of the arr

const words = ["speaker", "fun", "teach", "dance"];
const jumbleWords = words.flatMap((jumble) => jumble.split(""));
console.log(jumbleWords);
