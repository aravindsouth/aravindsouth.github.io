// login form client side validation

let email = document.getElementById("inputEmail");
let pswd = document.getElementById("inputPassword");
let email_flag, pswd_flag;
pswd.value
function validate() {
    let regexp1 = /^([A-Za-z0-9_\.-]{1,50})@([A-Za-z0-9\-]{2,70})\.([a-z]{2,6})(.[a-z]{2,3})?$/;
    // let regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let regexp2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; // password with special characters allowed

    email_flag = 0;
    pswd_flag = 0;
    
    if (regexp1.test(email.value)) {
        email_flag = 1;
        // return true;
    }
    if (regexp2.test(pswd.value)) {
        pswd_flag = 1;
    }
    if ((email_flag == 1) && (pswd_flag == 1)) {
        return true;
    } else {
        alert('Invalid email or password');
        return false;
    }
}
