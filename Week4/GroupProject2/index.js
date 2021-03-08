

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
        return tip, totalBill, tipPer;
    };

    
};


    
let calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(event){
    var bill = Number(document.getElementById('billTotal').value);
    var serviceQuality = document.getElementById('quality').value;
    var numGuests = Number(document.getElementById('groupSize').value);
    console.log(bill, serviceQuality, numGuests);

    calculateTip(bill, serviceQuality, numGuests);

    var tipAmount = document.querySelector('#tipAmount')
    var totalBillWithTip = document.querySelector('#totalBillWithTip')
    var tipPerson = document.querySelector('#tipPerson')
    tipAmount.value = tip;
    totalBillWithTip.value = totalBill;
    tipPerson.value = tipPer;

    document.getElementById('results').style.display='block'
    
});
  
    

