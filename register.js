var error = document.getElementById('errorMessage');
var password = document.getElementById('registerPassword');
var repeatPassword = document.getElementById('registerCheckPassword');

function checkSame(){
    if (password.value === repeatPassword.value){
        addAccount()
        error.textContent = "Account created"
    } else if (password.value != repeatPassword.value){
        error.textContent = "Repeat password does not match password!"
    }
}

function addAccount(){
    console.log("Account created");
}