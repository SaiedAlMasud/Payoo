console.log("Machine script loaded");
function getValueFromId(id) {
    const value = document.getElementById(id).value;
    return value;
}

function showOnly(id){
    const addMoney = document.getElementById("add-money-section");
    const cashout = document.getElementById("cashout-section");
   
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    //show the selected section
    const sectionToShow = document.getElementById(id);
    sectionToShow.classList.remove("hidden");
}