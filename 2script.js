let error = document.getElementById('error')
let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4') 

function submit() {
    // if(emaile.value == '' || emaile.value == 0) {
    //     error.innerHTML = 'Please fill out the required field'
    //     error.style.color = 'red'
    // } else if(!(emaile.value).includes(('@') || (!(emaile.value).includes('.')))){
    //     error.innerHTML = 'Input a valid email'
    //     error.style.color = 'red'
    // } else{
    //     error.innerHTML = '✔'
    //     error.style.color = 'green'
    // }
    if(emaile.value == '' || emaile.value == 0) {
        error.innerHTML = 'Please fill out the required field'
        error.style.color = 'red'
    } else if((!(emaile.value).includes('@')) || (!(emaile.value).includes('.'))){
        error.innerHTML = 'Input a valid email'
        error.style.color = 'red'
    } else{
        error.innerHTML = '✔'
        error.style.color = 'green'
    }

    if(phone.value == '' || phone.value == 0) {
        error1.innerHTML = 'Please fill out the required field'
        error1.style.color = 'red'
    } else if((phone.value).length >= 15){
        error1.innerHTML = 'Your number is greater than 14 digits'
        error1.style.color = 'red'
    } else if((phone.value).length <14) {
        error1.innerHTML = 'Your  number is not up to 14 digits'
        error1.style.color = 'red' 
    } else if(!(phone.value).includes('+234') && (phone.value).length == 14){
        error1.innerHTML = 'Your input is not a phone number'
        error1.style.color = 'red'
    } else{
        error1.innerHTML = '✔'
        error1.style.color = 'green'
    }

    
    if(user.value == '' || user.value == 0 ){
        error2.innerHTML = 'Please fill out the required field'
        error2.style.color = 'red'
    } else if ((user.value).length < 8 || (!(user.value).includes ('@')) ){
        error2.innerHTML = 'Your username is invalid'
        error2.style.color = 'red'
    } else{
        error2.innerHTML = '✔'
        error2.style.color = 'green'
    }


    if(pass.value == '' || pass.value == 0){
        error3.innerHTML = 'Please fill out the required field'
        error3.style.color = 'red'
    } else if((pass.value).length < 6 ){
        error3.innerHTML = 'Your password must be up to 7 letters'
        error3.style.color = 'red'
    } else{
        error3.innerHTML = '✔'
        error3.style.color = 'green'
    }

    if(confirme.value == '' || confirme.value == 0){
        error4.innerHTML = 'Please fill out the required field'
        error4.style.color = 'red'
    } else if(!(confirme.value == pass.value)){
        error4.innerHTML  = 'Please input correct password'
        error4.style.color = 'red'
    } else{
        error4.innerHTML = '✔'
        error4.style.color = 'green'
    }

    
}