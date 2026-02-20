//console.log("Withdraw script loaded");

document.getElementById("cashout-btn").addEventListener("click", function() {
    //get cashout number
    const cashoutNumber = getValueFromId("cashout-number");
    //console.log("Cashout number entered:", cashoutNumber);
    //get cashout amount
    const cashoutAmount = getValueFromId("cashout-amount");
    //console.log("Cashout amount entered:", cashoutAmount);
    //get available balance
    const availableBalance = document.getElementById("available-balance").innerText;
    //console.log("Available balance:", availableBalance);
    //get pin number
    const password = getValueFromId("pin-number");
    //console.log("Pin number entered:", password);

    //varify number is 11 digit
    if(cashoutNumber.length !== 11) {
        alert("Please enter a valid 11-digit mobile number.");
        return;
    }
    else if(cashoutAmount <= 0) {
        alert("Invalid cashout amount.");
        return;
    }
    else{
        if(Number(cashoutAmount) > Number(availableBalance)) {
            alert("Insufficient balance.");
            return;
        }
        else{
            if(password === "1234") {
                alert("Cashout successful!");
                //update available balance
                const newBalance = Number(availableBalance) - Number(cashoutAmount);
                document.getElementById("available-balance").innerText = newBalance;
            }
            else {
                alert("Invalid pin number.");
                return;
            }
        }
    }


});