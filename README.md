### Object-Oriented Programming (OOP)

- **Grouping**: Data and related functions (methods) are bundled together inside objects.
- **Purpose**: Objects model real-world entities and encapsulate data and behavior, allowing for modular and reusable code.
- **Example**: A `Car` object might have properties like `color` and `speed`, and methods like `accelerate()` and `brake()`.

### Procedural Programming (PP)

- **Grouping**: Functions and data are separate. Functions operate on data that is often passed to them or accessed from outside the functions.
- **Purpose**: Focuses on sequences of procedures or steps to process data, emphasizing control flow and task execution.
- **Data Access**: Functions can access and modify global or external data, in addition to the data passed as arguments.
- **Example**: A function like `calculateSpeed(distance, time)` operates on data passed as arguments but may also use or modify global variables.

### Functional Programming (FP)

- **Grouping**: Functions operate on data, and the focus is on using pure functions that transform data without modifying the original. Code is organized around the use of functions.
- **Purpose**: Emphasizes immutability and function composition, aiming for predictable and side-effect-free operations.
- **Data Access**: Functions should only use data passed directly as arguments and avoid accessing or modifying external/global data to ensure purity.
- **Example**: A function like `doubleNumbers(numbers)` takes a list of numbers as an argument and returns a new list with each number doubled, without altering the original list.

### Summary

- **OOP**: Bundles data and methods inside objects.
- **PP**: Separates functions and data, with functions that can access and modify both passed arguments and external/global data.
- **FP**: Organizes code around pure functions that operate on data passed directly to them, emphasizing immutability and avoiding external/global data access.
