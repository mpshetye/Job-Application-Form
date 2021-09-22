let userForm = document.getElementById("userForm");
userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
     console.log('You have submitted the form');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    // Open the object
    // USE THIS FOR POST REQUEST
    xhr.open('POST', '/search_data', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    


    // send the request
    const email = document.getElementById('Myemail').value;
    // console.log(emailData)
    // const data = emailData.value;
    var data = JSON.stringify({
        "email": email
    });
    console.log(data);
    console.log('Front 33')
    xhr.send(data);
}



// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });
