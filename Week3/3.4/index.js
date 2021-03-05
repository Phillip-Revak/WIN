// OBJECT ORIENTED PROGRAMMING
// Classes & Objects
// Abstraction, Encapsulation, Inheritance, Polymorphism
// Super class, subclass

// let arrays = {
//     howItsDefined: [],
//     howElementsAreSeparated: ',',
//     dataTypesArraysCanStore: ["number", "string", "more arrays", "objects", "null", "undefined"],
//     arrayFunctions: [
//     ]
// }

// ABSTRACTION EXAMPLE:
// A Light switch. I don't know what is connected from switch to light fixture or how it works exactly. But all I do is flip a switch and there's light, or flip it off and there's no light.

// ENCAPSULATION EXAMPLE: 
// A burrito, you get lots of different things wrapped in one tortilla, clean looking on the outside.

// INHERITANCE EXAMPLE:
// Shoes, they  have a brand, style, size. Within those they often have further inheritance.

// POLYMORPHISM EXAMPLE:
// Shoes, Nike redefines specific methods for their styles, and their sizes which run slightly different than other brands.

// let newArr = arr.map(function(value){
// }[, value]);

// newArr(3, 'a');
// console.log(newArr);

// 1
// let arrayOne = ['a', 'a', 'a'];
// let newArr = arrayOne.map(value => value + 1);
// console.log(newArr);

// let fill = (number, 'value') => new Array(3).fill('a');
// console.log(fill);

// // 2
// let inputArray = [1, 2, 3];
// let reverted = inputArray.reverse();
// console.log(inputArray);

// // 3
// let startingArray = [0, 1, false, 2, undefined, '', 3, null];
// let filtered = startingArray.filter()

// DOM practice
let para = document.createElement('p');
para.innerHTML = "Hey, I'm red!"
let cont = document.querySelector('div#container');
cont.appendChild(para);
let p = document.querySelector('p');
p.style.color = 'red';

let third = document.createElement('h3');
third.innerHTML = "Hey, I'm a blue h3!"
cont.appendChild(third);
let three = document.querySelector('h3');
three.style.color = 'blue';

let boxer = document.createElement('div');
cont.appendChild(boxer);
boxer.setAttribute('id', 'boxy');
let boxy = document.querySelector('div#boxy');
boxy.style.border = "solid black";
boxy.style.backgroundColor = "pink";

let first = document.createElement('h1');
para.innerHTML = "I'm in a div";
boxy.appendChild(first);
first.setAttribute('id', 'one');
let one = document.querySelector('h1#one');
one.style.color = 'black';







// Arnold Palmer Invitational
// Rory, Reed, Burns
// Hovland, Spieth, Kiz, Tringale, Davis, 
// Kizzire, NeSmith, Malnati
// Clark, Griffin