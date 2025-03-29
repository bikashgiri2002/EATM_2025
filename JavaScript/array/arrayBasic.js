const arr = ["Apple", 2, true, 4.5, ["Banana", "Mango", "Orange"]];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);

// console.log(typeof arr);
let fruits = ["Apple", "Banana", "Mango", "Orange"];
// properties
console.log(fruits.length);

// methods
fruits.push("pineapple");
// fruits.push(56);

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.unshift("Pineapple");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

fruits.unshift("Pineapple");

console.log(fruits);

// let subArray = fruits.slice(2, 5);

// console.log(subArray);

fruits.splice(3, 0, "Grapes");

// console.log(fruits);

fruits.splice(5, 2, "Strawberry", "Watermelon");

console.log(fruits);

console.log(fruits.indexOf("apple"));

console.log(fruits.includes("Pineapple"));
console.log(fruits.includes("apple"));
