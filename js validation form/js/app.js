// get tag from html
const btn = document.querySelector('.btn');


let em  = document.querySelector('.em');
let pas = document.querySelector('.pas');
let tex = document.querySelector('.tex');
let num = document.querySelector('.num');
 
// add event

btn.addEventListener('click', function (){
    emailVAlidation();
    passwordVAlidation ();
    nameValidation();
    numberVAlidation();

})



// validation for email
function emailVAlidation(){
    let email = document.querySelector('.email').value;
    if(email.length > 3 && email.length < 30 && email.includes('@') && email.includes('mail.com')){
        em.innerHTML = 'you are right';
        em.style.color = 'green'
    }
    
     else {
        em.innerHTML = 'noo';
        em.style.color = 'red'
        return;
     }
}


// validation for password

function passwordVAlidation (){
    const password = document.querySelector('.password').value;
    if(password.length > 8 && password.length < 30){
        pas.innerHTML = 'you are right';
        pas.style.color = 'green'
    }

    // if(password.includes(' ')){
    //     pas.innerHTML = 'noo';
    //     pas.style.color = 'red';
    //     return;
    // }
     else {
        pas.innerHTML = 'noo';
        pas.style.color = 'red'
        return;
     } 
}


// validation for name

function nameValidation(){
    const text = document.querySelector('.text').value;
 
    if(text.length > 3 && text.length < 30 && text.includes(' ')){
        tex.innerHTML = 'you are right';
        tex.style.color = 'green'
    }
    
     else {
        tex.innerHTML = 'noo';
        tex.style.color = 'red'
        return;
     }

}


// validation for number
function numberVAlidation(){
    const number = document.querySelector('.number').value;
    if(number.length == 9){
        num.innerHTML = 'you are right';
        num.style.color = 'green'
    }

    else{
        num.innerHTML = 'noo';
        num.style.color = 'red'
        return; 
    }
}