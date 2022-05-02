const form = document.querySelector('#user-login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalnumbinput = document.querySelector('input[name="personal_number"]');
const mobilenumbinput = document.querySelector('input[name="mobile_number"]');
const positioninput = document.querySelector('input[name="position"]');


form.addEventListener('submit', e=>{
    e.preventDefault();
    try {
        console.log(emailInput.value);
} catch (e) {
        console.log('catch error', e);
    }


    e.preventDefault(); 
    console.log(emailInput.value);
    console.log(validateEmail()) ;
    console.log(validatePassword()) ;
    console.log(validatePersonalnumber()) ;
    console.log(validateMobilenumb()) ;
    console.log(validatePosition()) ;

    if (validateEmail()&& validateMobilenumb&&validatePassword()&&validatePosition()&&validatePersonalnumber()){
        console.log('Call to backend api')
        const modal = document.querySelector('#user-login-form')
        modal.classList.remove('visible')
        modal.reset()
    }
});



function validateEmail(){
    if (!emailInput.value){
        emailInput.classList.add('has-error');
        emailInput.parentNode.querySelector('.error-message').innerText = 'please enter email';
        
        return false;
    }
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        emailInput.classList.add('has-error');
        emailInput.parentNode.querySelector('.error-message').innerText = 'please enter corect email';
        return false;


    }
    emailInput.classList.remove('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
} 
function validatePassword(){
    if (!passwordInput.value){
        passwordInput.classList.add('has-error');
        passwordInput.parentNode.querySelector('.error-message').innerText = 'please enter password';
        return false;
    }
    if(passwordInput.value.length <8 ){
        passwordInput.classList.add('has-error');
        passwordInput.parentNode.querySelector('.error-message').innerText = 'please enter 8 char';
        return false;
    }
    
    passwordInput.classList.remove('has-error');
    passwordInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
} 
function validatePersonalnumber(){
    if (!personalnumbinput.value){
        personalnumbinput.classList.add('has-error');
        personalnumbinput.parentNode.querySelector('.error-message').innerText = 'please enter personal number';
        return false;
        
    }
    if(personalnumbinput.value.length <11 || personalnumbinput.value.length >11 ){
        personalnumbinput.classList.add('has-error');
        personalnumbinput.parentNode.querySelector('.error-message').innerText = 'please enter only 11 char';
        return false;

    }
    personalnumbinput.classList.remove('has-error');
    personalnumbinput.parentNode.querySelector('.error-message').innerText = '';
    return true;
} 
function validateMobilenumb(){
    if (!mobilenumbinput.value){
        
        mobilenumbinput.classList.add('has-error');
        mobilenumbinput.parentNode.querySelector('.error-message').innerText = 'please enter mobile number';
        return false;
    }
    if(mobilenumbinput.value.length <9 || mobilenumbinput.value.length >9){
        mobilenumbinput.classList.add('has-error');
        mobilenumbinput.parentNode.querySelector('.error-message').innerText = 'please enter mobile number';
        return false;

    }

    mobilenumbinput.classList.remove('has-error');
    mobilenumbinput.parentNode.querySelector('.error-message').innerText = '';
    return true
} 
function validatePosition(){
    if (!positioninput.value){
        positioninput.classList.add('has-error');
        positioninput.parentNode.querySelector('.error-message').innerText = 'please enter position';
        return false;
        
    }
    if(positioninput.value.length >30){
        positioninput.classList.add('has-error');
        positioninput.parentNode.querySelector('.error-message').innerText = 'please enter 30<char';
        return false;

    }
    positioninput.classList.remove('has-error');
    positioninput.parentNode.querySelector('.error-message').innerText = '';
    return true;
}

const showModal = document.querySelector('#showModal')
showModal.addEventListener('click', openModal)


function openModal(){
    const modal = document.querySelector('#user-login-form')
    modal.classList.add('visible')
 
}


