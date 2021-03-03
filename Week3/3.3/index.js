// DOM works like a branching tree. It is a JS representation of the HTML document loaded into the browser.
// getElementById() .. gets a single node based on id attribute

// // Get a single node.
// let el = document.getElementById('username');
// console.log(el);

// let element = document.getElementsByClassName('bulls');
// console.log(element);

// let ellys = document.querySelector('input.bulls');
// console.log(ellys);

// let els = document.querySelectorAll('input.bulls');
// let arrayOfEls = Array.from(els);
// console.log(els);
// console.log(arrayOfEls);

// // nodeList to array
// let links = document.querySelectorAll('a');
// let arrayOfLinks = Array.from(links);
// console.log(arrayOfLinks);

// let header = document.querySelector('header');
// console.log(header);

// let sections = document.querySelectorAll('section');
// console.log(sections);

// let current = document.querySelector('section.current');
// console.log(current);

// let nextSection = current.nextElementSibling;
// console.log(nextSection);

// let previousChild = current.previousElementSibling.children[0];
// console.log(previousChild);

// let div = document.querySelector('h2.highlight').parentElement.parentElement;
// console.log(div);

// let h2 = Array.from(document.querySelectorAll('section h2')).map(function(headerSecond){
//     return headerSecond.parentElement;
// });
// console.log(h2);

// innerHTML get or set the html text inside a node.
