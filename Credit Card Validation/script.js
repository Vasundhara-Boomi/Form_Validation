document.addEventListener('DOMContentLoaded', function () {
    const creditCardForm = document.getElementById('credit-card-form');

    creditCardForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateCreditCardForm();
    });

    function validateCreditCardForm() {
        const titleInput = document.getElementById('title1');
        const firstNameInput = document.getElementById('fname1');
        const creditCardNumberInput = document.getElementById('creditCardNumber');
        const cvvNumberInput = document.getElementById('cvvNumber');            
        const expiryDateInput = document.getElementById('expiryDate');

        // Validate title
        if (titleInput.value === "") {
            setErrorFor(titleInput, 'Please select a title');
        } else {
            setSuccessFor(titleInput);
        }

        // Validate first name
        if (!/^[A-Za-z]+$/.test(firstNameInput.value)) {
            setErrorFor(firstNameInput, 'Name can only contain alphabets');
        } else if (firstNameInput.value.trim() === "") {
            setErrorFor(firstNameInput, 'Name cannot be blank');
        } else {
            setSuccessFor(firstNameInput);
        }

        // Validate credit card number
        if (!/^\d{16}$/.test(creditCardNumberInput.value)) {
            setErrorFor(creditCardNumberInput, 'Credit card number should be 16 digits');
        } else {
            setSuccessFor(creditCardNumberInput);
        }

        // Validate CVV number (only digits and length of 3)
        const cvvNumber = cvvNumberInput.value;
        const cvvNumberPattern = /^[0-9]{3}$/;
        if (!cvvNumberPattern.test(cvvNumber)) {
            setErrorFor(cvvNumberInput, 'CVV number must be 3 digits');
        } else {
            setSuccessFor(cvvNumberInput);
        }


        // Validate expiry date
        const currentDate = new Date();
        const expiryDate = new Date(expiryDateInput.value);
        if (expiryDate < currentDate) {
            setErrorFor(expiryDateInput, 'Enter valid Expiry date');
        } else {
            setSuccessFor(expiryDateInput);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
});
