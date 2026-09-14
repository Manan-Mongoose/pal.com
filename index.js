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
let accountCreationInps = [];
signUpButton.addEventListener('click', function() {
    signUpForm.classList.toggle('show');
    startMsg.classList.toggle('hide');
})
submitButton.addEventListener('click', function() {
    if (accountCreationInps) {
        accountCreationSuccess.textContent = 'Account created successfully!';
    }
})