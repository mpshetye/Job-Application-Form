$("#fetchbtn").click(function () {
//   console.log("ajax is called");

  // alert(id);
  $.ajax({
    type: "GET",
    url: `/user_data`,
    success: function (response) {
        console.log(response);
      response.forEach((element) => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const email = document.createElement("td");
        const phone = document.createElement("td");
        const job = document.createElement("td");
        const reside = document.createElement("td");

        name.innerHTML = element.name;
        email.innerHTML = element.email;
        phone.innerHTML = element.phone;
        job.innerHTML = element.jobType;
        reside.innerHTML = element.reside;

        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(job);
        row.appendChild(reside);

        $("#tab").append(row);
      });
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    },
  });
});




$("#resetbtn").click(function () {
    $('#data tbody').empty();
});