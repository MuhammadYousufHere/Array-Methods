const students = [
  { name: "Ali", grades: 67 },
  { name: "Qasim", grades: 77 },
  { name: "Faisal", grades: 89 },
  { name: "Noman", grades: 97 },
];
// Q1 sort descending
const dSort = [...students].sort((a, b) => b.grades - a.grades);
console.log("Students ", students);
console.log(dSort);

// Q2 After sorting arr , reverse it

const rev = dSort.reverse();
console.log("Reverse", rev);

// Q3 find student who has grades over 90

const find = students.find((student) => {
  const res =
    student.grades > 90
      ? console.log(
          `${student.name} has obtained greater than 90 i.e ${student.grades}`
        )
      : "";

  return res;
});
