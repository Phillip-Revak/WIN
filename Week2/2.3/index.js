console.log("Hello World");

var myNum = 5;
let greeting = 'hello world';
const myAge = 30;

console.log(myAge);
/*
let amountRaisedSoFar = 1000;
let donation = prompt("how much would you like to donate?");
amountRaisedSoFar = Number(donation) + amountRaisedSoFar;
console.log("We have now raised: " + amountRaisedSoFar + "!");
*/

//Simple if statement
/*
let x = true;
if(x) {
	console.log(true);
} else if (x == true) {
	console.log("this won't run");
} else {
	console.log(false);
}
*/

let temp = 60;

if (temp > 45) {
    console.log("I'm going hiking!");
} else {
    console.log("It's too cold to go hiking");
}

// CHALLENGE 1: COFFEE //
let coffee = 5;

if (coffee < 3) {
    console.log("Yes i'll take another cup of coffee");
} else {
    console.log("I think im okay for now");
}

// CHALLENGE 2: OIL //
let miles = 750;

if (miles > 500) {
    console.log("Yes I think I need an oil change.")
} else {
    console.log("My car doesn't need an oil change yet.")
}

let T = 75;
let P = true;
console.log("The temperature is " + T + " degrees.")

if (T > 80 && P === false) {
    console.log("Time to swim");
} else if (T > 80 && P === true) {
    console.log("Nah, it's raining");
} else if (T <= 80 && P === false) {
    console.log("Nah, it's too cold");
} else {
    console.log("No way bro... It's cold and rainy out there. What are you thinking??");
};

// For Loops
// for (let i = 0; i <= 9; i++) {
//     console.log( i );
// }
/*
for (let bottle = 99; bottle >= 0; bottle --) {

if (bottle === 0) {
    console.log("Hey! We need more root beer!");
} else {
    console.log(bottle + " bottles of root beer on the wall.");
}
}
*/


// While Loops
/* let x = 0;
while(x < 10) {
    x = x + 1;
    // or x +=1
    // or x++
    console.log(x);
}
*/

// Do-while
/*
let x = 0;
do {
    x = x + 1;
    // or x +=1
    // or x++
    console.log(x);
} while(x < 10);
*/

// Switch
let x = 258;
switch(x) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		break;
	case 258:
		console.log(2);
		break;
	default:
		console.log('default');
}

// FOR LOOP ASSIGNMENT
for (let i = 0; i <= 99; i++) {
    if (i === 0) {
        console.log(i + ' is even');
    }  else if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
    
}
