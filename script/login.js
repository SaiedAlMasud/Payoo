console.log("Login script loaded");

document.getElementById("login-btn").addEventListener("click", function() {
    console.log("Login button clicked");
    const mobileNumber = document.getElementById("mobile-number").value;
    const password = document.getElementById("password").value;
    if (mobileNumber && password) {
        if(mobileNumber === "1234567890" && password === "1234") {
            alert("Login successful!"); 
            window.location.assign("pages/home.html");
        }
        else {
            alert("Invalid mobile number or password.");
            return;
        }
    }
    else {
        alert("Please enter both mobile number and pin.");
    }
});