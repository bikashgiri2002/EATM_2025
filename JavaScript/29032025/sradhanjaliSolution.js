// Even Odd
let n = 19
if (n % 2 == 0) {
    console.log(`${n} is Even Number`);
}
else { 
    console.log(`${n} is Odd Number`);
}

// Function 
const checkEvenOdd = (n) => {
    if (n % 2 == 0) {
        return `${n} is Even Number`;
    } else {
        return `${n} is Odd Number`;
    }
}

console.log(checkEvenOdd(20));
console.log(checkEvenOdd(21));