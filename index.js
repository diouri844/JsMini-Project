const {
    calculateAverage,
    findMinimum,
    findMaximum,
    calculateClassAverage,
    displayOverAllClass
} = require('./grade');

// Function to get the average grade of all students
const students = require('./data/students'); 

const average = calculateAverage(grades);
const minimum = findMinimum(grades);
const maximum = findMaximum(grades);
const classAverage = calculateClassAverage(students);

console.log(`Average Grade: ${average}`);
console.log(`Minimum Grade: ${minimum}`);
console.log(`Maximum Grade: ${maximum}`);
console.log(`Class Average: ${classAverage}`);

displayOverAllClass(students);
