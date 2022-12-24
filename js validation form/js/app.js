


// get tag from html
const btn = document.querySelector('.btn');

const validations = [
    {
        element: document.querySelector('.em'),
        validation: didEmailPassedValidation
    },
    {
        element: document.querySelector('.pas'),
        validation: didPasswordPassesValidation
    },
    {
        element: document.querySelector('.tex'),
        validation: didFullNamePassedValidation
    },
    {
        element: document.querySelector('.num'),
        validation: didPhoneNumberPassedValidation
    }
]

btn.addEventListener('click', function (e){

    validations.forEach(validationItem => {
        if (validationItem.validation()) {
            validationItem.element.innerHTML = 'you are right';
            validationItem.element.style.color = 'green'
        } else {
            validationItem.element.innerHTML = 'noo';
            validationItem.element.style.color = 'red'

            e.preventDefault();
        }
    })
})

function didEmailPassedValidation() {
    let email = document.querySelector('.email').value;
    return email.length > 3 && email.length < 30 && email.includes('@') && email.includes('mail.com');
}

function didPasswordPassesValidation(){
    const password = document.querySelector('.password').value;
    return password.length > 8 && password.length < 30;
}

function didFullNamePassedValidation(){
    const text = document.querySelector('.text').value;
    return text.length > 3 && text.length < 30 && text.includes(' ');
}

function didPhoneNumberPassedValidation(){
    const number = document.querySelector('.number').value;
    return number.length == 9;
}