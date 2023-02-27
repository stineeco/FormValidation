// const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastame');
// const email = document.getElementById('email');
// const password = document.getElementById('password');


// form.addEventListener ('submit' ,(e)=>{
//     e.preventDefault();

//     checkInputs();
// });


// function checkInputs(){
//     const firstnameValue = firstname.value.trim();
//     const lastnameValue = lastname.value.trim();
//     const emailValue = firstname.value.trim();
//     const passwordValue = firstname.value.trim();


//     if (lastnameValue === ''){
//       setErrorFor(lastname, 'Last Name cannot be empty')
      
//     }else{
//         setSuccessFor(lastname);

//     }
// }


// function setErrorFor(input, message){
//     const formControl = input.parentElement;
//     const small = formControl.queryselector('small');
//     small.innerText = message;

//     formControl.className = 'form_control error'

// }