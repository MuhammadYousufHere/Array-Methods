const foods = [
  { food: "raspberries", type: "fruits" },
  { food: "oranges", type: "fruits" },
  { food: "broccoli", type: "vegetable" },
  { food: "wheat", type: "grains" },
];

const blkBeans = { food: "black beans", type: "legume" };
const chisSeeds = { food: "chia seeds", type: "seed" };

// Q1 Remove the last item from food arr
console.log(foods);

foods.pop();
console.log(foods);
// Q2 Remove the first item from food arr
foods.shift();
console.log(foods);

// Q3 Add the variable blkBeans to the beginnings of the food arr
foods.unshift(blkBeans);
console.log(foods);

// Q4 Add the variable chisSeeds to the end of the food arr
foods.push(chisSeeds);
console.log(foods);
