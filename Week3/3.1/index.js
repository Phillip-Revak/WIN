//Define a function
// function saySomething(something) {
// 	console.log(something);
// }

// function sumTwoDigits(digitOne, digitTwo) {
//     return digitOne + digitTwo
// }

// console.log(sumTwoDigits(8, 2));

// Functions are designed to return something.
// Can only use return once in a function.

// function add() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         console.log('currently at loop # ' + i);
//         sum += arguments[i];
//         console.log(sum);
//     }
//     return sum;
// }

// add(1,2,3,4,5,6,7,8);

// arguments - javascript keyword
// ...rest - javascript keyword to keep going with a long list of numbers.

// let billAmount = 50;
// function gratuity(){
//     return (billAmount * .2);
// }

// function totalWithGrat(amount){
//      return gratuity() + amount;
// }

// console.log(
//     `Your total including gratuity is:  ${totalWithGrat(billAmount)}`
// );

// Functions can be assigned to variables
// hoist: JS way of using a variable before it's been declared. JS moves declarations towards the top where it's needed.

// Anonymous functions

// let hands = ['rock', 'paper', 'scissors'];

// function getComputerHand(){
//     let choice = parseInt((Math.random()*10) % 3);
//     return hands[choice];
// }

// function compare(first, second){
//     switch(first, second){
//         case 'rock', 'paper':
//             return "bot wins, paper over rock";
//             break;
//         case 'rock', 'scissors':
//             return "human wins, rock over scissors";
//             break;
//         case 'rock', 'rock':
//             return "its a tie, rock and rock";
//             break;
//         case 'paper', 'paper':
//             return "its a tie, paper and paper";
//             break;
//         case 'paper', 'scissors':
//             return "bot wins, scissors over paper";
//             break;
//         case 'paper', 'rock':
//             return "human wins, paper over rock";
//             break;
//         case 'scissors', 'paper':
//             return "human wins, scissors over paper";
//             break;
//         case 'scissors', 'scissors':
//             return "its a tie, scissors and scissors";
//             break;
//         case 'scissors', 'rock':
//             return "bot wins, rock over scissors";

//     }
// }

// let choice1 = getComputerHand();
// let choice2 = getComputerHand();
// let gameResult = compare(choice1, choice2);
// console.log(gameResult);

// IIFE - Immediatley invoked function expressions
// Wrap in parenthesis and immediatley call.

// (FUNCTION(argument){
//     things
// })();

// EXPERIMENT
// function outer(){
//   let a = "Watch me work";
//   let b = {
//       car: 'firetruck',
//       age: 13,
//   }

//     function inner(a, b) {
//         console.log(a, b);
//     }
  
//     inner(a, b);
//     console.log(a, b);
//   }
  

//   outer();

// THIS Keyword
// "this" always refers to the current object
 