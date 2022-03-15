/* form validation with JavaScript */


const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpass = document.getElementById("confirm_password");
const mobilenumber = document.getElementById("mobile-number");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    var userValue = username.value;
    var passValue = password.value;
    var pass2Value = confirmpass.value;
    var mobileValue = mobilenumber.value;
    var emailValue = email.value;

    if (userValue == "") {
        document.getElementById("checkuser").innerHTML = "** Please fill the above field"
    }
    else if (userValue.length <= 5 ) {
        document.getElementById("checkuser").innerHTML = "** Username are not valid"
    }

    const passformat = /^[A-Za-z]\w{8,14}$/;
    
    if (passValue == "") {
        document.getElementById('checkpassword').innerHTML = "** Please fill the above field"
    }
    else if (!passformat.test(passValue)) {
        document.getElementById('checkpassword').innerHTML = "** Please try another one"
    }

    if (pass2Value == "") {
        document.getElementById('checkpassword2').innerHTML = "** Please fill the above field"
    }
    else if (pass2Value !== passValue) {
        document.getElementById('checkpassword2').innerHTML = "** Password is not matching"
    }

    const mobileformat = /^\d{10}$/;
    if (mobileValue == "") {
        document.getElementById('checkmobile').innerHTML = "** Please fill the above field"
    }
    else if (mobileValue.length !== 10) {
        document.getElementById('checkmobile').innerHTML = "** Mobile number will must be 10 digits"
    }
    else if (!mobileformat.test(mobileValue)) {
        document.getElementById('checkmobile').innerHTML = "** Incorrect format"
    }

    const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailValue == "") {
        document.getElementById('checkemail').innerHTML = "** Please fill the above field"
    }
    else if (!emailValue.match(mailformat)) {
        document.getElementById('checkemail').innerHTML = "** Please enter a valid mail address"
    }
}


