class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";
  // Static methods can be accessed only through the Class name and can be used withoud creating an instance
  static validate(value, flag, validatorValue) {
    // The "this" keyword inside a static method refers to the class itself. This is because classes in JavaScript are essentially functions, and functions are instances of the Function constructor. Therefore, "this" in a static method points to the class, allowing access to static properties and methods of the class.

    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }

    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}
class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  greet() {
    console.log(`Hi i am ${this.name}`);
  }
}

class UserInput {
  // The constructor is the first method that gets called when an instance of the class is created using the "new" keyword.
  constructor() {
    // Get references to the form, username input, and password input elements from the DOM.
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("user");
    this.passwordInput = document.getElementById("password");

    // "this.form" refers to the form element of the current instance.
    // "this.signUpHandler" accesses the method from the prototype of the instance.
    // ".bind(this)" ensures that "this" inside signUpHandler refers to the instance,rather than the form element (which it would otherwise refer to due to being attached as an event handler).
    this.form.addEventListener("submit", this.signUpHandler.bind(this));
  }

  // Placeholder for the form submission handler method.
  signUpHandler(e) {
    e.preventDefault();
    const enteredUserName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid input - username or password is wrong (password should be atleast 6 characters)"
      );

      return;
    }

    const user = new User(enteredUserName, enteredPassword);
    console.log(user);
    user.greet();
  }
}

new UserInput();
