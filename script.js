// SWITCH PAGES
function showRegister() {
  loginPage.style.display = "none";
  registerPage.style.display = "block";
}

function showLogin() {
  registerPage.style.display = "none";
  loginPage.style.display = "block";
}

// REGISTER
function register() {
  let data = {
    name: regName.value,
    age: regAge.value,
    role: regRole.value,
    address: regAddress.value,
    address2: regAddress2.value,
    email: regEmail.value,
    password: regPass.value
  };

  localStorage.setItem(data.email, JSON.stringify(data));
  alert("Registered!");
  showLogin();
}

// LOGIN
function login() {
  let email = username.value;
  let pass = password.value;

  let user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === pass) {
    loginPage.style.display = "none";

    if (user.role === "user") mainPage.style.display = "block";
    else volunteerPage.style.display = "block";
  } else {
    alert("Invalid login");
  }
}

// ALERTS
function showAlert() {
  output.innerHTML = "⚠️ Flood Alert!";
}

function findHelp() {
  output.innerHTML = "Nearby hospitals shown below.";
}

function sendSOS() {
  output.innerHTML = "Calling emergency...";
  contacts.style.display = "block";
}

// VOLUNTEER
function helpRequest() {
  volOutput.innerHTML = "Help needed in Patna!";
}

// ADMIN
function viewUsers() {
  let users = Object.keys(localStorage);
  adminOutput.innerHTML = "Users: " + users.join(", ");
}
