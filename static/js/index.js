const name = document.getElementById('Myname');
const email = document.getElementById('Myemail');
const phone = document.getElementById('Myphone');
let validEmail = false;
let validPhone = false;
let validUser = false;


name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z ]{2,30}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.value= "Please Enter a Valid Name";
        validUser = false;        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        console.log('Your email is valid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.value= "Please Enter a Valid Email";
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if(regex.test(str)){
        console.log('Your phone is valid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.value= "Please Enter a Valid Phone";
        validPhone = false;
        
    }
})

// let submit = document.getElementById('submit');
// submit.addEventListener('click', (e)=>{
//     e.preventDefault();

//     console.log('You clicked on submit');
//     console.log(validEmail, validUser, validPhone);
    
//     // Submit your form here
//     if(validEmail && validUser && validPhone){
//         let failure = document.getElementById('failure');

//         console.log('Phone, email and user are valid. Submitting the form');
//         let success = document.getElementById('success');
//         success.classList.add('show');
//         // failure.classList.remove('show');
//         // $('#failure').alert('close');
//         $('#failure').hide();
//         $('#success').show();
        
//     }
//     else{
//         console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
//         let failure = document.getElementById('failure');
//         failure.classList.add('show');
//         $('#success').hide();
//         $('#failure').show();
//         }

    
    
// })
