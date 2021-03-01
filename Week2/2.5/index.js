let teachers = ['Melissa', 'Yusuf', 'Laura', 'Stevie', 'Harry', 'James'];
// console.log(teachers[1]);
// console.log(teachers[5]);

// ARRAY FUNCTIONS
// console.log(teachers.length); // .length
// teachers.push('Kevin'); // .push();
// console.log(teachers);

// teachers.pop(); // .pop();
// console.log(teachers);

// teachers.unshift('Kevin'); // .unshift();
// console.log(teachers);

// teachers.shift(); // .shift();
// console.log(teachers);

// teachers[6] = 'Lebron'; // predefine where an item goes in the Array
// console.log(teachers);
// console.log(teachers.indexOf('Stevie')); // Find the position of a certain item in the Array

// let newteachers = teachers.slice(1, 6); // .slice();
// console.log(newteachers);
// let thenewteachers = teachers.splice(1, 2, 'Will', 'Smith'); // .splice():
// console.log(thenewteachers);
// console.log(teachers);

// // LOOP THROUGH ARRAY
// for(let i = 0; i < teachers.length; i++) {
//     console.log(`${teachers[i]} is the best teacher`);
// }

// FUNCTIONS
// function : js keyword -- defining a function here.
// parameters - defined by parenthesis -- items/variables/things that are required for the function to run.
// let donationMade = prompt('how much do you want to donate?');
// let donated = Number(donationMade);
// let amountSoFar = 1000;

// function nameOfFunction(donated, amountSoFar){
//     let sum = (donated + amountSoFar);
//     console.log(`so far we have ${sum}`);
// }

// nameOfFunction(donated, amountSoFar);

// OBJECTS
// way to store info with 'labels'
let course = {
    instructor: 'Laura',
    ta: ['Melissa', 'yusuf'],
    length: 4,
    students: 36,
    subject: 'javascript',
}

let x = course.instructor;
console.log(x);
console.log(course.instructor);

