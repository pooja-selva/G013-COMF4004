import {requiredValidation,emailValidation,isEqual,removeStyle,applayStyle} from './validation.js';


window.onload = ()=>{

    const registerBtn = document.getElementById("Register-button");
    const formKey = ['name','medical','address','bloodGroup','idnum','cnum'];

    registerBtn.addEventListener('click',(e)=>{
        let isAllDataFill = requiredValidation(formKey);
        

        if(isAllDataFill){
            window.alert("Sucess")
        }
        
       
    });


}
