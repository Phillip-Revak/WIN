// JAVASCRIPT CALLBACKS
// A callback is a function passed as an argument to another function to be executed later.
// Callbacks can be synchronous or asynchronous

// Asynchronous code means functions will run in parallel with other functions.


// setTimeout((param1 = 4, param2 = 6) => {
//     sum = param1 + param2;
//     console.log(sum);
// }, 5000)

// AJAX - Asynchronous JavaScript and XML
// JS has built in support for creating HTTP request using the XML HTTP request object.

// Callback Hell
// callback maintenance and readability becomes really tedious.
// Avoid by: shallow code, modularize, handle the errors.


// PRACTICE
// Create a function using XMLHttpRequest();
// Keywords: .open(); // .onload(); // .send();
// Break it down to avoid callback hell.

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 

//   function money(value) {
//       document.getElementById("demo").innerHTML = value;
//   }

//   function getStuff(myCallback) {
//       let thing = new XMLHttpRequest();
//       thing.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
//       thing.onload = function() {
//           if (thing.status = 200) {
//               let parsed = JSON.parse(this.responseText)
//               myCallback(parsed.title);
//           } else {
//               myCallback("error: " + thing.status)
//           }
//       }
//       thing.send();
//   }

// getStuff(money);

function getMoney(value) {
    document.getElementById("money").innerHTML = value;
}

function looseChange(myCallback, num1) {
    if (num1 >= 6) {
        myCallback("You really getting money then, okay!");
    } else if  (num1 < 6 && num1 > 3) {
        myCallback("I mean you not, not getting money!");
    } else if (num1 <= 3) {
        myCallback("I don't know man...");
    } else if (num1 = undefined){
        myCallback(" ");
    }
}

let clk = document.getElementById("clicked");
clk.addEventListener("click", function(event) {
    let info = document.getElementById("figures").value;
    console.log(info);
    looseChange(getMoney, info);

});




// Morikawa, Spieth
// Hovland(am), Niemann, Reed
// Ooust(am), Ancer, TRINGALE, Kiz(am), Burns(am), Palmer, Smith(am)
// Conners(am), Griffin(am), Kirk, Hatton(am)


// Ownership
// Cantlay, Finau, Xander, Morikawa, Rahm, Webb, Hovland, Niemann, Ancer, Zalatoris
// Low
// DJ, JT, Rory, DeChambeau, Reed

// Rory(am), Xander(am), 
// Nesmith, Steele, Werenski,
// Conners(am), Griffin(am), Kirk, Hatton(am)