const bowlingScores = [115, 235, 455, 112, 141, 167, 190, 211];

// Q1 Does it includes score of 300
const Q1 = bowlingScores.includes(300);
console.log("Q1", Q1);

// Q2 Are some of them are under 150?
const Q2 = bowlingScores.some((score) => (score < 150 ? true : false));
console.log("Q2", Q2);

// Q3 is Every score an even?
const Q3 = bowlingScores.every((score) => (score % 2 === 0 ? true : false));
console.log("Q3", Q3);
