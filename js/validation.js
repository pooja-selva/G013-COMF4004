
export function applayStyle(key = [], className=""){
    key.map(v => {
        const ele = document.getElementById(v);
        if(!ele.classList.contains(className)){
            ele.classList.add(className);
        }
    }); 
}

export function removeStyle(key = [], className=""){ key.map(v => document.getElementById(v).classList.remove(className)); } 

export function requiredValidation(key = []){
    var invalidFeild = [];
    var isValidForm = false;
    key.map(v => document.getElementById(v).value == "" && invalidFeild.push(v));
    isValidForm = invalidFeild.length == 0;

    if(!isValidForm){
        const validKey = key.filter(v => !invalidFeild.includes(v)) || [];
        applayStyle(invalidFeild,'form-error');
        removeStyle(validKey, 'form-error');
    }
    else{
        removeStyle(key, 'form-error');
    }

    return isValidForm;
}

export function emailValidation(emailKey){
    let email = document.getElementById(emailKey).value;
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    let isValid = regex.test(email);
    
    if(!isValid){
        applayStyle([emailKey],'form-error');
    }
    else{
        removeStyle([emailKey], 'form-error');
    }
    
    return isValid;
}

export function isEqual(key1, key2){
    const v1 = document.getElementById(key1).value;
    const v2 = document.getElementById(key2).value;
    return v1==v2;
}