//form elements
var fName = document.getElementById('fName');
var fError = document.getElementById('fError');

var pStatus = document.getElementById('pStatus');
var pError = document.getElementById('pError');

var eMail = document.getElementById('eMail');
var mError = document.getElementById('mError');

var passCode = document.getElementById('passCode');
var passError = document.getElementById('passError');

var rePass = document.getElementById('rePass');
var reError = document.getElementById('reError');


//submit button function//

//Name value
function subm(){
    if(fName.value == ""){
        fName.style.borderColor = 'crimson';
        fName.focus();
        fError.innerHTML = 'Please enter your name here';
        return false;
    }
    
    //Profession Value
     if(pStatus.value == ""){
        pStatus.style.borderColor = 'crimson';
        pStatus.focus();
        pError.innerHTML = 'Please enter your profession here';
        return false;
    }
    
      //Email Value
     if(eMail.value == ""){
        eMail.style.borderColor = 'crimson';
        eMail.focus();
        mError.innerHTML = 'Please enter your E-mail here';
        return false;
    }
    
      //Password Value
     if(passCode.value == ""){
        passCode.style.borderColor = 'crimson';
        passCode.focus();
        passError.innerHTML = 'Please enter your passcode here';
        return false;
    }
    
     if(passCode.value.length <= 5 ){
        passCode.style.borderColor = 'crimson';
        passCode.focus();
        passError.innerHTML = 'Please enter atleast 6 characters';
        return false;
    }
    
      //Re-password Value
     if(rePass.value == ""){
        rePass.style.borderColor = 'crimson';
        rePass.focus();
        reError.innerHTML = 'Please enter your re-passcode here';
        return false;
    }
    
     if(rePass.value != passCode.value){
        rePass.style.borderColor = 'crimson';
        rePass.focus();
        reError.innerHTML = 'Password did not match';
        return false;
    }
}


//to remove error

//Name value
function errorValid(){
    if(fName.value != ""){
        fName.style.borderColor = 'black';
        fError.innerHTML = '';
    }
    
     //Profession Value
    if(pStatus.value != ""){
        pStatus.style.borderColor = 'black';
        pError.innerHTML = '';
    }
    
     //Mail Value
      if(eMail.value != ""){
        eMail.style.borderColor = 'black';
        mError.innerHTML = '';
    }
    
     //Password Value
     if(passCode.value != ""){
        passCode.style.borderColor = 'black';
        passError.innerHTML = '';
    }
    
    //Re-password Value
     if(rePass.value != ""){
        rePass.style.borderColor = 'black';
        reError.innerHTML = '';
    }
}


fName.addEventListener('blur',errorValid);
pStatus.addEventListener('blur',errorValid);
eMail.addEventListener('blur',errorValid);
passCode.addEventListener('blur',errorValid);
rePass.addEventListener('blur',errorValid);

//modal js
var trigger = document.getElementById('trigger');

trigger.addEventListener('click',function(){
    modal.style.display = 'block';
})

var close = document.getElementById('close');

close.addEventListener('click',function(){
    modal.style.display = 'none';
})














 