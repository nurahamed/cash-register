"use strict"
let billAmount = document.getElementById("bill-amt");
let checkBtn = document.getElementById("check-btn");
let cashGiven = document.getElementById("cash-given");
let errMsg = document.getElementById("error-message");
let returnAmt = document.getElementById("returnAmt");
const availableNotes =[2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
let noOfNotes = document.getElementsByClassName("no-of-notes");

checkBtn.addEventListener("click", function validateBillandCash() {
  if (billAmount.value > 0) {
    errMsg.style.display = "none";
    if (cashGiven.value >= billAmount.value  ) {
     let ammountReturned = cashGiven.value - billAmount.value;
        calculateChange(ammountReturned);
    } else {
        showMessage( "Do you wanna wash plates?" );
        returnAmt.innerHTML= null;
    }
} else {
    showMessage( "Invalid Bill Amount" );
    returnAmt.innerHTML= null;
  }
});

function calculateChange(amt){
    returnAmt.innerHTML = `<h3>Total Amount Return: ${amt}</h3>`;
    for(let i=0; i<availableNotes.length; i++){
    const numberOfNotes = Math.trunc(amt / availableNotes[i]);
    amt %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(message){
    errMsg.style.display = "block";
    errMsg.innerHTML = `<h3 class="err">${message}</h3>`

}
