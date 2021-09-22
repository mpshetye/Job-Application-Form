let userForm = document.getElementById("userForm");
userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
     console.log('You have submitted the form');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
        console.log('13');
        console.log(xhr.responseText);
        console.log('Hello');
        if(xhr.readyState == 1) {
            console.log('Request started.');
        }
        
        if(xhr.readyState == 2) {
            console.log('Headers received.');
        }
        
        if (xhr.readyState == 3) {
            console.log('Data loading..!');
        }
        if (xhr.readyState == 4) {
            console.log('Request ended.');
            console.log(xhr.responseText);
        }
    };
    // Open the object
    // USE THIS FOR POST REQUEST
    xhr.open('POST', '/search_data', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');



    // What to do when response is ready
    // xhr.onload = function () {
    //     console.log(xhr.responseText)
        // if (this.responseText.length == 0) {
        //     $("#divDis").css("display", "none");
        //     $("#divErr").css("display", "block");
        //   } 
        //   else if(this.responseText.length != 0) {
        //     $("#divErr").css("display", "none");
        //     $("#divDis").css("display", "block");
        //     $("#data tbody").empty();
        //     this.responseText.forEach((element) => {
        //       const row = document.createElement("tr");
        //       const name = document.createElement("td");
        //       const email = document.createElement("td");
        //       const phone = document.createElement("td");
        //       const job = document.createElement("td");
        //       const reside = document.createElement("td");
    
        //       name.innerHTML = element.name;
        //       email.innerHTML = element.email;
        //       phone.innerHTML = element.phone;
        //       job.innerHTML = element.jobType;
        //       reside.innerHTML = element.reside;
    
        //       row.appendChild(name);
        //       row.appendChild(email);
        //       row.appendChild(phone);
        //       row.appendChild(job);
        //       row.appendChild(reside);
    
        //       $("#tab").append(row);
        //     });
        // }
    // }

    // send the request
    const email = document.getElementById('Myemail').value;
    // console.log(emailData)
    // const data = emailData.value;
    params = JSON.stringify({email: email});
    console.log(params);
    xhr.send(params);
}