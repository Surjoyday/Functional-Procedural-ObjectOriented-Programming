function signUpHandler(e) {
  e.preventDefault();

  const userNameInput = document.getElementById("user");
  const enteredUserName = userNameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredUserName.trim().length === 0) {
    alert("Username field cannot be empty!");
    return;
  }

  if (enteredPassword.trim().length <= 5) {
    alert("Password must be at least 6 characters or longer!");
    return;
  }
}

function connectForm(callback) {
  const form = document.getElementById("user-input");
  form.addEventListener("submit", callback);
}

connectForm(signUpHandler);
