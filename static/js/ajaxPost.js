$("#userForm").submit(function (event) {
  event.preventDefault();
  console.log("ajax is called");
  const emailData = $("#Myemail").val();
  // alert(id);
  $.ajax({
    type: "POST",
    data: JSON.stringify({ email: emailData }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: `/search`,
    success: function (response) {
      // console.log(response);
      // console.log(response.length);
      if (response.length == 0) {
        $("#divDis").css("display", "none");
        $("#divErr").css("display", "block");
      } else {
        $("#divErr").css("display", "none");
        $("#divDis").css("display", "block");
        $("#data tbody").empty();
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
      }
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    },
  });
});

// $("#resetbtn").click(function () {
//     $('#data tbody').empty();
// });
