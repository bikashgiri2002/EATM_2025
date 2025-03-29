const add = (a, b) => {
    return a + b;
}

console.log(add(6, 7));
console.log(add(8, 7));
console.log(add(9, 7));

const add3 = (a, b, c, fn) =>{
    return fn(a, b) + c;
}

console.log(add3(1,2,3,add));

const multiply = (a, b) => {
    return a * b;
}
console.log(add3(1,2,3, multiply));

// setTimeout(() => {
//     console.log('Hello, after 3 second');
// }, 3000)

console.log("hello wait...");

setInterval(() => {
    console.log('Hello, every 2 second');
}, 2000);

console.log("hello after...");