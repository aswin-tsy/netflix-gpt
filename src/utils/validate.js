

export const validateFormValues  = ( email, password,name =null) =>{

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_])(?!.*[\\|\/|\s]).{8,20}$/.test(password);
    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(name);

    if(!isEmailValid){
        return 'Invalid Email Address'
    }else if(!isPasswordValid){
        return 'Password is wrong! please try again'
    }else 
    if(name !== null && !isNameValid){
        return 'Invalid name! Please try differnt name'
    }
    return null
}