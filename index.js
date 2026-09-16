const startMsg = document.getElementById('startMsg');
const signUpButton = document.getElementById('signUp');
const usernameInp = document.getElementById('usernameInp');
const emailInp = document.getElementById('emailInp');
const passwordInp = document.getElementById('passwordInp');
const confirmPasswordInp = document.getElementById('confirmPasswordInp');
const submitButton = document.getElementById('submit');
const accountCreationSuccess = document.getElementById('accountCreationSuccess');
const newUserDiv = document.getElementById('newUser');
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
const all = document.querySelectorAll("[id]");
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
let accountCreationInps = [];
let accountCreationFails = 0;

function signUpFormValidation() {
    usernameInp.style.borderColor = '#ddd';
    usernameInp.style.borderRadius = '5px';
    emailInp.style.borderColor = '#ddd';
    emailInp.style.borderRadius = '5px';
    passwordInp.style.borderColor = '#ddd';
    passwordInp.style.borderRadius = '5px';
    confirmPasswordInp.style.borderColor = '#ddd';
    confirmPasswordInp.style.borderRadius = '5px';
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
        accountCreationSuccess.style.fontSize = '10px';
        accountCreationSuccess.textContent = 'Account creation failed. One or more of the above fields are invalid.' + accountCreationFails + 'x';
        if (!accountCreationInps[0]) {
            usernameInp.style.border = '1px solid red';
            usernameInp.style.borderRadius = '5px';
        }
        if (!accountCreationInps[1]) {
            emailInp.style.border = '1px solid red';
            emailInp.style.borderRadius = '5px';
        }
        if (!accountCreationInps[2]) {
            passwordInp.style.border = '1px solid red';
            passwordInp.style.borderRadius = '5px';
        }
        if (!accountCreationInps[3]) {
            confirmPasswordInp.style.border = '1px solid red';
            confirmPasswordInp.style.borderRadius = '5px';
        }
    }
}

signUpButton.addEventListener('click', function() {
    signUpForm.classList.toggle('show');
    startMsg.classList.toggle('hide');
});

submitButton.addEventListener('click', function() {
    signUpFormValidation();
});