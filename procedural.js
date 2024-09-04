const form = document.getElementById("user-input");

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

  const user = {
    name: enteredUserName,
    password: enteredPassword,
  };

  console.log(user);
  console.log(`Hi i am ${user.name}`);
}

form.addEventListener("submit", signUpHandler);
