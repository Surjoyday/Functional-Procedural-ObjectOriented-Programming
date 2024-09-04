const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }

  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementID) {
  return document.getElementById(inputElementID).value;
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      "Invalid input - username or password is wrong (password should be atleast 6 characters)"
    );
  }
  return { user: userName, password: userPassword };
}

function greetUser(userObj) {
  console.log(`H i am ${userObj.user}`);
}

function signUpHandler(e) {
  e.preventDefault();

  const enteredUserName = getUserInput("user");

  const enteredPassword = getUserInput("password");

  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(formID, formSubmitHandler) {
  const form = document.getElementById(formID);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signUpHandler);
