
// This is an if/else statement that receives the quality of service and determines the percentage of tip that you should give.
function calculateTip(bills, quality, guests) {
    console.log(bills, quality, guests);
    if (quality === "Great") {
        // Tip is 20%
        tip = bills * .2;
        tipPer = tip / guests;
        totalBill = bills + tip;
        return tip, totalBill, tipPer;
    } else if (quality === "Okay") {
        // Tip is 15%
        tip = bills * .15;
        tipPer = tip / guests;
        totalBill = bills + tip;
        return tip, totalBill, tipPer;
    } else if (quality === "Hot Trash") {
        // Ask for Refund
        tip = "Boi you must be outside your mind..."
        tipPer = "We outchea..";
        totalBill = "Hook me up with a refund!";
        document.getElementById('harry').style.display='block'
        return tip, totalBill, tipPer;
    };

    
};


// Then we select the calculate button.    
let calculate = document.getElementById('calculate');

// Then add an event listener to the calculate button. The event listener grabs the current value of the three input fields when it is clicked. The bill amount, the quality of service and the number of guests.
calculate.addEventListener('click', function(event){
    var bill = Number(document.getElementById('billTotal').value);
    var serviceQuality = document.getElementById('quality').value;
    var numGuests = Number(document.getElementById('groupSize').value);
    console.log(bill, serviceQuality, numGuests);

    // Inside the event listener we call the if/else function that we wrote at the top of the page with the new input values.
    calculateTip(bill, serviceQuality, numGuests);

    // Then we select the three disabled input fields for tip amount, total bill with tip, and tip per person and insert a value into them for tip, totalbill, and tipPer that we returned from the calculateTip function.
    var tipAmount = document.querySelector('#tipAmount')
    var totalBillWithTip = document.querySelector('#totalBillWithTip')
    var tipPerson = document.querySelector('#tipPerson')
    tipAmount.value = tip;
    totalBillWithTip.value = totalBill;
    tipPerson.value = tipPer;

    // Lastly we overwrite the CSS that is set to display:none to display: block so that the results are displayed.
    document.getElementById('results').style.display='block'
    
});
  
    

