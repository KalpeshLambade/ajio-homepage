function register(event) {
  event.preventDefault();

  var userName = document.getElementById("name").value;
  var userNumber = document.getElementById("number").value;
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var conformPassword = document.getElementById("conform-password").value;

  var userData = {
    name: userName,
    number: userNumber,
    email: userEmail,
    password: userPassword,
  };

  var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];

  var flang = false;
  for (var i = 0; i < dataFromLS.length; i++) {
    if (dataFromLS[i].email === userEmail) {
      flang = true;
    }
  }

  if (flang) {
    alert("Email Already existed, Please enter another email");
    document.getElementById("email").value = "";
  } else if (userPassword.length < 8) {
    alert("password Must be greater than 8 characters");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else if (userPassword !== conformPassword) {
    alert("Password does not match please enter similiar conform password");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else {
    dataFromLS.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
    window.location.href = "/homepage.html";
    alert("registration done");
  }
}

function login(event) {
  event.preventDefault();

  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;

  var dataFromLS = JSON.parse(localStorage.getItem("userData"));

  var flag = false;
  for (var i = 0; i < dataFromLS.length; i++) {
    if (
      dataFromLS[i].email === userEmail &&
      dataFromLS[i].password === userPassword
    ) {
      flag = true;
    }
  }

  if (flag) {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    window.location.href = "/index.html";
    alert("Loged in Sucessful");
  } else {
    alert("Please check password or email again");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}
