// non parameterized function
function sayHello() {
    console.log("Hello World!");
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

// parameterized function

function sayName(name) {
    console.log("Hello " + name);
}

sayName("Bikash");
sayName("Subha Jyoti");
sayName("Pratikshya");
sayName("Satarupa");

// named function

function greet(name) {
    console.log("Hello " + name);
}

// anonymous function

let myFunction = function(name) {
    console.log("Hello " + name);
}

// arrow function

const myArrowFunction = (name) => {
    console.log('hello' + name);
}

// return function

const add = (a, b) => {
    let sum = a + b;
    return sum;
}

let sum = add(10, 20);
console.log(sum);


// default parameter

const addDefault = (a = 0, b = 0) => {
    let sum = a + b;
    return sum;
}

let sumDefault = addDefault(10, 20);
console.log(sumDefault);

let totalDefault = addDefault();
console.log(totalDefault);

// rest parameter

const addRest = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((number) => {
        // sum = sum + number;
        sum += number;
    });
    return sum;
}

let sumRest = addRest(20, 30, 40, 50, 80);

console.log(sumRest);

// Satarupa's Solution
const mul = (a, b) => {
    let mul = a * b;
    return mul;
}

let mulResult = mul(10, 20);
console.log(mulResult);

const restMulti = (...args) => {
    let result = 1;
    args.forEach((number) => {
        result = result * number;
    });
    return result;
}

let restMultiResult = restMulti(10, 20, 30, 40, 50);
console.log("Satarupa result " + restMultiResult);

// Pratikshya's Solution
let a = 10;
let b = 20;
let multi = (a, b) => {
    return a * b;
}

let multiplyResult = multi(a, b);
console.log(multiplyResult);


// Assignments
// 1. Check Even or Odd
// 2. Calculate Factorial
// 3. Reverse a String
// 4. Count Vowels in a String
// 5. Check for Palindrome

