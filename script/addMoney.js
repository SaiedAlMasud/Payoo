document.getElementById("add-money-btn").addEventListener("click", function() {
    //get bank name
    const bankName = getValueFromId("bank-name");
    //console.log("Bank name entered:", bankName);

    //get add money number
    const addMoneyNumber = getValueFromId("add-money-number");
    //console.log("Add money number entered:", addMoneyNumber);

    //get add money amount
    const addMoneyAmount = getValueFromId("add-money-amount");
    //console.log("Add money amount entered:", addMoneyAmount);

    //get pin number
    const password = getValueFromId("add-money-pin");
    //console.log("Pin number entered:", password);

    //get available balance
    const availableBalance = document.getElementById("available-balance").innerText;
    //console.log("Available balance:", availableBalance);

    if(bankName != "Select Bank" && addMoneyNumber && addMoneyAmount && password) {
         if(addMoneyNumber.length !== 11) {
            alert("Please enter a valid 11-digit mobile number.");
            return;
        }
        else if(addMoneyAmount <= 0) {
            alert("Invalid amount to add.");
            return;
        }
        else{
            if(password === "1234") {
                alert(`Money added successfully! from ${bankName} at ${new Date().toLocaleTimeString()}`);
                //update available balance
                const newBalance = Number(availableBalance) + Number(addMoneyAmount);
                document.getElementById("available-balance").innerText = newBalance;
            }
            else {
                alert("Invalid pin number.");
                return;
            }   
        }
    }
    else{
        alert("Please fill in all the fields.");
        return;
    }

});