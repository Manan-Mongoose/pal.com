const startMsg = document.getElementById('startMsg');
const signUpButton = document.getElementById('signUp');
const signUpForm = document.getElementById('signUpForm');
const submitButton = document.getElementById('submit');
const emailInp = document.getElementById('email');
const passwordInp = document.getElementById('password');
const confirmPasswordInp = document.getElementById('confirmPassword');
const usernameInp = document.getElementById('username');
const accountCreationSuccess = document.getElementById('accountCreationSuccess');
const newUserDiv = document.getElementById('newUser');
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
let accountCreationInps = [];
let accountCreationFails = 0;
signUpButton.addEventListener('click', function() {
    signUpForm.classList.toggle('show');
    startMsg.classList.toggle('hide');
})
submitButton.addEventListener('click', function() {
    console.log(usernameInp.checkValidity())
    console.log(emailInp.checkValidity())
    console.log(passwordInp.checkValidity())
    console.log(confirmPasswordInp.checkValidity())
    console.log(usernameInp.value)
    console.log(emailInp.value)
    console.log(passwordInp.value)
    console.log(confirmPasswordInp.value)
    accountCreationInps = [false, false, false, false]
    accountCreationInps[0] = usernameInp.checkValidity();
    accountCreationInps[1] = emailInp.checkValidity();
    if (passwordInp.value == confirmPasswordInp.value) {
        if (passwordInp.checkValidity()) {
            accountCreationInps[2] = true
            accountCreationInps[3] = true
        }
    }
    else if (passwordInp.checkValidity()) {
        accountCreationInps[2] = true
    }
    if (accountCreationInps[0] && accountCreationInps[1] && accountCreationInps[2] && accountCreationInps[3]) {
        accountCreationSuccess.classList.toggle('ok');
        accountCreationSuccess.textContent = 'Account Created Successfully!';
    }
    else {
        accountCreationFails += 1;
        accountCreationSuccess.classList.toggle('failed');
        accountCreationSuccess.textContent = 'Account creation failed. One or more of the above fields are invalid.' + accountCreationFails + 'x';
        if (!accountCreationInps[0]) {
            usernameInp.style.borderColor = 'red'
        }
        if (!accountCreationInps[1]) {
            emailInp.style.borderColor = 'red'
        }
        if (!accountCreationInps[2]) {
            passwordInp.style.borderColor = 'red'
        }
        if (!accountCreationInps[3]) {
            confirmPasswordInp.style.borderColor = 'red'
        }
    }
})