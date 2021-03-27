let btn = document.getElementById("fetchbtn");

btn.addEventListener("click", populate);

function populate() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "/allUser_data", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText); //can use xhr. instead of this.
    //   console.log(obj);
    //   let data = document.querySelector("#data >tbody");
      let tab = document.getElementById('tab');
      // console.log(data);
    //const tr = document.createElement("tr");
    //   let str = "";
      for (key in obj) {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const email = document.createElement("td");
        const phone = document.createElement("td");
        const job = document.createElement("td");
        const reside = document.createElement("td");

        name.innerHTML = obj[key].name;
        email.innerHTML = obj[key].email;
        phone.innerHTML = obj[key].phone;
        job.innerHTML = obj[key].jobType;
        reside.innerHTML = obj[key].reside;

        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(job);
        row.appendChild(reside);
        tab.appendChild(row);
      }
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
}
