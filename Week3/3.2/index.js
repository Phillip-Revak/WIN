// // functions within functions
// function add(number1, number2) {
//     return number1 + number2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// // Declare a function that takes a function as an argument
// function doMath(operation, operation2, number1, number2) {
//     let result = operation(number1, number2);
//     let result2 = operation2(number1, number2);
//     return result + result2;
// }

// // Pass a function into another.
// let sum = console.log(doMath(multiply, add, 2, 3));

// Higher order funtion, takes another function as an argument.
// Callback function, function passed as an argument into another function.


// Find and Filter
	
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// // let passingStudents = students.filter(function(student){
// //     return student.average > 60;
// // });

// // console.log(passingStudents);

// MAP

// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// console.log(fullNames);

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// CHALLENGE 1

// let superHeroes = [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"],
//     ["The Flash", "Barry Allen"]
//   ]

//   let secretIdentity = superHeroes.map(function(revealArray){
//         return revealArray[0] + " is " + revealArray[1];
//   });

//   console.log(secretIdentity);

// THIS WITH AN ASYNC FUNCTION
let teacher = {
	name: 'Shane',
	speak: function() {
		
		//Maybe you're fetching data from an API, or getting user input
		setTimeout(function(){
			console.log('later my name is ' + this.name);
		},5000)
		
		//Runs immediately
		console.log('Now my name is ' + this.name);
	}
}

teacher.speak();
