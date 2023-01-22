
import {requiredValidation,emailValidation,isEqual,removeStyle,applayStyle} from './validation.js';

window.onload = ()=>{

    const signUpButton = document.getElementById("signUp-button");
    const loginButton = document.getElementById("login-button");
    const signupKey = ['fName','lName','email','password','cPassword'];
    const loginKey = ['userName', 'uPassword'];

    signUpButton.addEventListener('click',(e)=>{
        e.preventDefault();
        let isAllDataFill = requiredValidation(signupKey);
        let isEqualPassword = isEqual('password','cPassword');
        if(isAllDataFill){
            //email validation
            emailValidation('email');

            //check the both password & confirm password are same or not
            if(!isEqualPassword){
                removeStyle(['confirm-password-message'],'invisible');
            }
            else{
                applayStyle(['confirm-password-message'],'invisible');
            }
        }
    });

    loginButton.addEventListener('click',(e)=>{
        e.preventDefault();
        let isAllDataFill = requiredValidation(loginKey);
        if(isAllDataFill){
            emailValidation('userName');
        }
    });

}
