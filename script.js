const formEl = document.querySelector('.form');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const messageEl = document.querySelector('#message');

let isValid = false;

let isPasswordsMatch = false;

// Helper function to update the message
function messageElUpdate(text, color) {
    messageEl.textContent = text;
    messageEl.style.color = color;
}

// Function to validate the form and return the boolean value;
function validateForm() {
    isValid = formEl.checkValidity();
    console.log(isValid);

    if(!isValid) {
        messageElUpdate('Please fill all the fields.', 'red');
        return;
    }

    if(password1El.value === password2El.value) {
        isPasswordsMatch = true;
        password1El.style.border = 'green';
        password2El.style.border = 'green';
    } else {
        isPasswordsMatch = false;
        messageElUpdate('Make sure the passwords match.', 'red');
        password1El.style.border = '1px solid red';
        password2El.style.border = '1px solid red';
        return;
    }

    if(isValid && isPasswordsMatch) {
        password1El.style.border = '1px solid green';
        password2El.style.border = '1px solid green';
        messageElUpdate('Suggessfully Registered!!!', 'green');
    }
}

// Function to store the valid form's data
function storeFormData() {
    const formData = {
        name: formEl.name.value,
        phone: formEl.phone.value,
        email: formEl.email.value,
        url: formEl.website.value,
        password: formEl.password.value
    }

    console.log(formData);
}

// Function to process the input data
function processData(e) {
    e.preventDefault();
    validateForm(); 

    if(isValid && isPasswordsMatch) { storeFormData(); }
}

// Event listeners
formEl.addEventListener('submit', processData);