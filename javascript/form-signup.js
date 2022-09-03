let email = document.getElementById("inputEmail");
let pswd = document.getElementById("inputPassword");
let phone = document.getElementById("inputPhone");
let email_flag, pswd_flag, phone_flag;
function validate() {
    let regexp1 = /^([A-Za-z0-9_\.-]{1,50})@([A-Za-z0-9\-]{2,70})\.([a-z]{2,6})(.[a-z]{2,3})?$/; // email
    // let regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // password
    let regexp2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; // password with special characters allowed
    let regexp3 = /^(\d{3})(\ )?(-)?(\.)?(\d{3})(\ )?(-)?(\.)?(\d{4})$/; // phone number

    email_flag = 0;
    pswd_flag = 0;
    phone_flag = 0;
    

    if (regexp1.test(email.value)) {
        email_flag = 1;
    }
    if (regexp2.test(pswd.value)) {
        pswd_flag = 1;
    }
    if (regexp3.test(phone.value)) {
        phone_flag = 1;
    }
    // if (email_flag != 1) {
    //     email.style.backgroundColor = "#eba591";

    if (email_flag + pswd_flag + phone_flag == 3) {
        return true;
    } else {
        alert('Invalid email or password');
        return false;
    }
}

let msg1 = document.getElementById('message1');
let str = document.getElementById('strength');
let confirmPswd = document.getElementById('inputConfirmPassword');
let msg2 = document.getElementById('message2');
function strengthFunction() {
    if (pswd.value.length > 0){
        msg1.style.display = "block";
    }
    else {
        msg1.style.display = "none";
    }
    if (pswd.value.length <= 4) {
        str.innerHTML = "weak";
        str.style.color = "red";
    }
    else if (pswd.value.length > 4 && pswd.value.length < 8) {
        str.innerHTML = "medium";
        str.style.color = "orange";
    }
    else if (pswd.value.length >= 8) {
        str.innerHTML = "strong";
        str.style.color = "green";
    }
}

function passwordCompare() {
    if(pswd.value != confirmPswd.value) {
        msg2.style.display = "block";
        msg2.style.color = "red";
    }
    else if(pswd.value == "") {
        msg2.style.display = "none";
    }
    else {
        msg2.style.display = "none";
    }

}

pswd.addEventListener ("input", strengthFunction);
confirmPswd.addEventListener('input', passwordCompare);
