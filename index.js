



const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');





form.addEventListener('submit', e =>{
    e.preventDefault();


    validateInputs()

})
const setError = (element, message) =>{
    const inputcontrol = element.parentElement;
    const errorDisplay = input.querySelector ('.error');
    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success')
}

const setSuccess = (input)=>{
    const formControl=input.parentElement;
    formControl.className = 'form_control success';
}


const validateInputs = () =>{
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue= password.value.trim();

    if (firstnamevalue === ''){
        setErrorFor(firstname, 'Frist Name cannot be empty')
    } else{
       
    }

    if (lastnamevalue === ''){
        setErrorFor(lastname, 'Last Name cannot be empty')
    } else{
       
    }

    if (emailvalue === ''){
        setErrorFor(email, 'Looks like this is not an email')
    } else{
     
    }

    if (passwordvalue === ''){
        setErrorFor(password, 'Password cannot be empty')
    } else{
      
    }

}



function setErrorFor(input, message){
     const formControl = input.parentElement;
     const small = form.querySelector('small');
     

     small.innerText =message
     email.placeholder = "email@example/com "
    
    
     formControl.className = 'form_control email error';
    
   


}













