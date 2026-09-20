const note = document.getElementById('workinprogress')
const startMsg = document.getElementById('startMsg');
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const signUpForm = document.getElementById('signUpForm');
const logInForm = document.getElementById('logInForm');
const usernameInp = document.getElementById('usernameInp');
const emailInp = document.getElementById('emailInp');
const passwordInp = document.getElementById('passwordInp');
const confirmPasswordInp = document.getElementById('confirmPasswordInp');
const submitSignUp = document.getElementById('submitSignUp');
const submitLogIn = document.getElementById('submitLogIn');
const accountCreationSuccess = document.getElementById('accountCreationSuccess');
const div = [document.getElementById('signUplogIn'),
    document.getElementById('signUpForm'),
    document.getElementById('logInForm')]
const importantAlwaysShow = [signUpButton, logInButton, note]
let accountCreationInps = [];
let accountCreationFails = 0;

let alChildren = []; //It is mis-spelled on purpose to not cause a syntax error
let dispTipe = []; //Same reason for the mis-spell here
for (const curDiv of div) { //Stores everything in HTML into the children list and what kind of display it has
    let children = curDiv.children;
    for (const child of children) {
        alChildren.push(child);
        dispTipe.push(getComputedStyle(child).display);
    }
}
const allChildren = alChildren;
const dispType = dispTipe;

function dispElementBorder(element, borderThickness, borderColor) { //Displays Whatever border and stuff is needed
    element.style.border = `${borderThickness} solid ${borderColor}`;
    element.style.borderRadius = '5px';
}

function signUpFormValidation() {
    dispElementBorder(usernameInp, '1px', 'grey');
    dispElementBorder(emailInp, '1px', 'grey');
    dispElementBorder(passwordInp, '1px', 'grey');
    dispElementBorder(confirmPasswordInp, '1px', 'grey');
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
        signUpForm.classList.add('hideEvery');
        accountCreationSuccess.classList.add('show');
        accountCreationSuccess.style.fontSize = '25px';
        accountCreationSuccess.textContent = 'Account has been created(not lmao)';
    }
    else {
        accountCreationFails += 1;
        accountCreationSuccess.classList.add('show');
        accountCreationSuccess.style.fontSize = '10px';
        accountCreationSuccess.textContent = 'Account creation failed. One or more of the above fields are invalid.' + accountCreationFails + 'x';
        if (!accountCreationInps[0]) {
            dispElementBorder(usernameInp, '1px', 'red');
        }
        if (!accountCreationInps[1]) {
            dispElementBorder(emailInp, '1px', 'red');
        }
        if (!accountCreationInps[2]) {
            dispElementBorder(passwordInp, '1px', 'red');
        }
        if (!accountCreationInps[3]) {
            dispElementBorder(confirmPasswordInp, '1px', 'red');
        }
    }
}

function logInFormValidation() {//Incomplete right now i havent even started bro

}

function hideEverythingElse(toShow) {//This isnt really working, I think you should try rewriting by first brainstorming in a notebook(less screentime)
    for (const [i, cur] of allChildren.entries()) { //Shows everything(initialises)
        let disp = dispType[i];
        cur.style.display = disp;
    }
    for (const cur of allChildren) { //Hides everything except for the items in the array 'importantAlwaysShow'
        if (!importantAlwaysShow.includes(cur) && !toShow.includes(cur)) {
            cur.style.display = 'none';
        }
    }
}

signUpButton.addEventListener('click', function() {
    signUpButton.classList.remove('anim');
    void signUpButton.offsetWidth;
    signUpButton.classList.add('anim');
    signUpForm.classList.toggle('show');
    let arr = Array.from(signUpForm.children);
    hideEverythingElse(arr);
});

logInButton.addEventListener('click', function() {
    logInButton.classList.remove('anim');
    void logInButton.offsetWidth;
    logInButton.classList.add('anim');
    logInForm.classList.toggle('show');
    let arr = Array.from(logInForm.children);
    hideEverythingElse(arr);
});

submitSignUp.addEventListener('click', function() {
    submitSignUp.classList.remove('anim');
    void submitSignUp.offsetWidth;
    submitSignUp.classList.add('anim');
    signUpFormValidation();
});

submitLogIn.addEventListener('click', function() {
    submitLogIn.classList.remove('anim');
    void submitLogIn.offsetWidth;
    submitLogIn.classList.add('anim');

});