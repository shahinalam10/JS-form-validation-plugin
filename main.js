var regForm = document.forms['rg-form'];
var aleart = document.querySelector('.message');
regForm.onsubmit = function(event){
    event.preventDefault();
    console.log(regForm['f_name'].value);
    console.log(regForm['l_name'].value);
    console.log(regForm['email'].value);
    console.log(regForm['password'].value);
    console.log(regForm['c_password'].value);

    if(regForm['password'].value !== regForm['c_password'].value){
        aleart.innerHTML ='Password does not match';
    }else if(regForm['password'].value.length <8){
        aleart.innerHTML ='password length must be 8';
    }
    else{
        aleart.innerHTML ='Submitted successfully';
    }

    console.log(regForm['submit-btn'].value);
    
}