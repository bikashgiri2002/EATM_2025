const arr = [2, 4, 7, 8, 10, 6, 5, 3, 1, 9, 11];

// calculate the sum
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

sumForEach = 0
arr.forEach((n) => {
    sumForEach = sumForEach + n;
})

console.log(sumForEach);