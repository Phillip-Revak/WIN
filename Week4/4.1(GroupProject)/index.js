// TIP CALCULATOR GROUP PROJECT

// WHAT WE NEED TO DO:
// 1. Calculate the total bill.
// 2. Number of guests.
// 3. Quality of service. 
// 4. Create functionality through Javascript.
// 5. Receive values and display through HTML.
// 6. Styling through CSS.

// Inputs
// 1. Amount of bill.
// 2. Service quality. Three types: Good, Average, Poor.
// 3. Percentage of tip correlating to service quality.
// 4. Number of guests. 

// Outputs
// 1. Amount of tip.
// 2. Total bill.

// EXTRAS
// 1. Quality of Dish/Restaurant. 
// 2. Pictures of food.

let billAmount, serviceQuality, numGuests;
billAmount = document.
serviceQuality = document.
numGuests = document.

function calculateTip(billAmount, serviceQuality, numGuests) {
    let tip;
    if (numGuests >= 8) {
        // Tip is 20%
        tip = billAmount * .2;
        return `The tip is ${tip} and the total bill is ${billAmount + tip}`;
    } else if (serviceQuality === "Great") {
        // Tip is 20%
        tip = billAmount * .2;
        return `The tip is ${tip} and the total bill is ${billAmount + tip}`;
    } else if (serviceQuality === "Okay") {
        // Tip is 15%
        tip = billAmount * .15;
        return `The tip is ${tip} and the total bill is ${billAmount + tip}`;
    } else if (serviceQuality === "Hot Trash") {
        // Ask for Refund
        return `Call for the manager and demand a refund!`
    }
}

calculateTip(billAmount, serviceQuality, numGuests);