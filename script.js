
function validateInput() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementsByName("email");
  const error = document.getElementsByClassName("email-address-error");
  const icon = document.getElementsByClassName(
    "fas fa-exclamation-circle"
  );
  if (email[0].value.length < 1 || !email[0].value.match(mailformat)) {
    console.log("notValid email address");
    email[0].style.border = "1px solid hsl(354, 100%, 66%)";
    error[0].classList.add("active");
    icon[0].style.visibility = "visible";
  } else {
    email[0].style.border = "1px solid hsl(223, 100%, 88%)";
    error[0].classList.remove("active");
  }
}

