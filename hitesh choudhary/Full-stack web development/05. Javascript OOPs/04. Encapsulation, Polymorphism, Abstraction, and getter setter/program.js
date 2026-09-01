//* Encapsulation, Polymorphism, Abstraction and getter setter
//  Let's discuss the features of Object Oriented Programming

//? Encapsulation
/**
 * Encapsulation is Object Oriented Programming concepts which restricts the direct access data of our classes.
 */

//* Understand with example

class BankAccount {
  /**
   * * When we add hashtag symbol than we can't access the properties by user not developer.
   */
  #userBalance = 0;

  constructor(
    username,
    userEmployment,
    userAge,
    userIncome,
    incomePerAnnum,
    bankAccountType,
  ) {
    this.username = username;
    this.userEmployment = userEmployment;
    this.userAge = userAge;
    this.userIncome = userIncome;
    this.incomePerAnnum = incomePerAnnum;
    this.bankAccountType = bankAccountType;
  }

  /**
   * ? How we can access the balance property and update the userBalance
   */
  deposit(amount) {
    this.#userBalance += amount;
    return this.#userBalance;
  }

  getBalance() {
    // Now if we don't want to access the original type we can wrap inside the string
    return `₹ ${this.#userBalance.toLocaleString()} amount in your ${this.bankAccountType} bank account`;
  }

  userInfo() {
    console.table({
      username: this.username,
      userAge: this.userAge,
      userEmployment: this.userEmployment,
      userIncome: this.userIncome,
      incomePerAnnum: this.incomePerAnnum,
      bankAccountType: this.bankAccountType,
    });
  }
}

// Creates the User
const userOne = new BankAccount(
  "Aayush Vyas",
  "employed",
  27,
  45000,
  540000,
  "saving",
);

console.log(userOne);
userOne.userInfo();
//* Let access the encapsulate features data
userOne.deposit(10000);
userOne.deposit(30000);
userOne.deposit(45000);
const depositedAmount = userOne.deposit(5000);
console.log(depositedAmount); // Output: 90000

//* We can access the encapsulate the method also with the help of getter method
const userOneBalance = userOne.getBalance();
console.log(userOneBalance);

//? Abstraction
/**
 * Abstraction is Object Oriented Programming concept in which we can hide the detail or internal complexity of implementation detail and expose only the essential features or functionality to the user.
 */

//* Let understand Abstraction with example

class MathsOperation {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  addNumbers() {
    return this.numbers.reduce((sum, number) => sum + number, 0);
  }

  subtractNumbers() {
    return this.numbers.reduce((diff, number) => diff - number);
  }

  multiplyNumbers() {
    return this.numbers.reduce((product, number) => product * number);
  }

  divideNumbers() {
    if (this.numbers.length !== 2) {
      throw new Error("Division requires exactly two numbers.");
    }
    return this.numbers[0] / this.numbers[1];
  }

  findModulus() {
    if (this.numbers.length !== 2) {
      throw new Error("Modulus requires exactly two numbers.");
    }
    return this.numbers[0] % this.numbers[1];
  }

  findExponential(power) {
    if (this.numbers.length === 1) {
      return this.numbers[0] ** power;
    }

    return this.numbers.map((number) => number ** power);
  }

  findEven() {
    return this.numbers.filter((number) => number % 2 === 0);
  }

  findOdd() {
    return this.numbers.filter((number) => number % 2 !== 0);
  }
}

const numbers = new MathsOperation(2, 4, 3, 1, 4);
const addition = numbers.addNumbers();
console.log("Addition = ", addition);
const subtraction = numbers.subtractNumbers();
console.log("Subtraction = ", subtraction);
const oddNumbers = numbers.findOdd();
console.log("Odd Numbers = ", oddNumbers);
const evenNumbers = numbers.findEven();
console.log("Event Numbers = ", evenNumbers);

//? Polymorphism
/**
 * Polymorphism is the most important and essential Object Oriented Programming Concept. It describes the ability of something to have or be displayed in more than one form
 */

//* Let understand polymorphism with example
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Bird extends Animal {
  isFly() {
    console.log(`Flying.....`);
  }
}

class FlightlessBird extends Bird {
  isFly() {
    console.log(`Can't Fly`);
  }
}

/**
 * * In above classes we have same method with different form
 */

const eagle = new Bird("Bald Eagle", "bird");
const ostrich = new FlightlessBird("Somali Ostrich", "bird");

//* Let's see the methods we created
eagle.isFly(); // Output: Flying....
ostrich.isFly(); // Output: Can't Fly

//? static keyword
/**
 * - static keyword is the special type of keywords which make the classes methods and properties static which are accessible inside the classes and also access by class only.
 * - this static methods and classes are not accessible by objects.
 */

class Calculator {
  static addNumber(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  static findExponential(number, power) {
    return number ** power;
  }
}

const calc = new Calculator();

// let try access the method from the object
console.log(calc.addNumber); // Output: giving error undefined

// Let access by the class it-self

const exponentValue = Calculator.findExponential(5, 2);
console.log(exponentValue); // Output: 25

const sumValue = Calculator.addNumber(10, 20);
console.log(sumValue); // Output: 30

//? Getter and Setter Methods
/**
 *   getter and setter methods give more control over our classes private properties and methods.
 * * getter and setter methods help to access the private properties member for retrieve and setting the value.
 */
class Employees {
  #salary = 0;
  #bonus = 0;
  #incomePerAnnum = 0;

  constructor(employeeName, employeeDepartment, employeePosition, salary) {
    if (salary < 0) {
      throw new Error("Please Enter value in positive");
    }
    this.employeeName = employeeName;
    this.employeeDepartment = employeeDepartment;
    this.employeePosition = employeePosition;
    this.#salary = salary;
    // we can access like this also but not access directly with Object
  }

  /**
   * ? We are using set and get keywords to create setter and getter methods
   *
   */
  //* set keyword to set the salary due to private member of the class
  set salary(value) {
    if (value < 0) {
      throw new Error("Please Enter value in positive");
    }
    this.#salary += value;
    return this.#salary;
  }
  //* get keyword to get the salary due to private member of the class
  get salary() {
    return `Your salary is ${this.#salary.toLocaleString()} per month`;
  }

  set incomePerAnnum(salary) {
    this.#incomePerAnnum = salary * 12;
    return this.#incomePerAnnum;
  }

  get incomePerAnnum() {
    return `Your income Per Annum ${this.#incomePerAnnum.toLocaleString()}`;
  }

  set bonus(value) {
    if(value < 0) {
        throw new Error("Please Enter value in positive")
    } 

    this.#bonus += value; 
    return this.#bonus; 
  }
}

const firstEmployee = new Employees(
  "Aayush Vyas",
  "Software Engineer",
  "Fullstack Developer",
  45000,
);

console.log(firstEmployee);
console.log(firstEmployee.salary);
firstEmployee.incomePerAnnum = 45000; 
console.log(firstEmployee.incomePerAnnum);  
