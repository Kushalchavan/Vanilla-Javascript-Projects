const usernameElement = document.querySelector('#username');
const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const confirmPassElement = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

// Checking Username
const checkUsername = () => {
    let valid = false;

    const min = 3,
          max = 25;

    const username = usernameElement.value.trim();

    if(!isRequired(username)) {
        showError(usernameElement, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameElement, `Username must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(usernameElement);
        valid = true;
    }
    return valid;
};

// Checking Email
const checkEmail = () => {
    let valid = false;
    const email = emailElement.value.trim();
    if(!isRequired(email)) {
        showError(emailElement, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailElement, 'Email is not valid.')
    } else {
        showSuccess(emailElement);
        valid = true;
    }
    return valid;
}

// Checking Password
const checkPassword = () => {
    let valid = false;

const password = passwordElement.value.trim();

    if(!isRequired(password)) {
        showError(passwordElement, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordElement, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 special characters in (!@#$%^&**)');
    } else {
        showSuccess(passwordElement);
        valid = true;
    }
    return valid;
};


const checkConfirmPassword = () => {
    let valid = false;

    // check confirm password
    const confirmPassword = confirmPassElement.value.trim();
    const password = passwordElement.value.trim();

    if(isRequired(confirmPassword)) {
        showError(confirmPassElement, 'Please enter the password again.')
    } else if (password !== confirmPassword) {
        showError(confirmPassElement, 'The password does not match.');
    } else {
        showSuccess(confirmPassElement);
        valid = true;
    }
    return valid;
}


// checks that email is valid or not 
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// checks that password is valid or not 
const isPasswordSecure = (password) => {
    const newre = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return newre.test(password);
}

/// Check empty value
const isRequired = value => value === '' ? false: true;

// checks length
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form element
    const formField = input.parentElement;

    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    //remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', (event) => {
    // Preventing the form from submitting
    event.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid && 
    isConfirmPasswordValid;

    // submit to the serverr if the form is valid
    if(isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        // setup a new timer 
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username' :
            checkUsername();
            break;
        case 'email' :
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password' :
            checkConfirmPassword();
            break;
    }
}));