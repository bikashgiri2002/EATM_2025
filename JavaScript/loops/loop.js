let students = ["rajesh", "riya", "pratikshya", "binod", "rajkrishna", "sweety"]
// for (let i = 0; i <= students.length - 1; i++) {
//     console.log(students[i]);
// }

// for(let i = 0; i < students.length; i++) {
//     students[i] = students[i] + "EATM";
// }
// console.log(students);

// forEach
// let eatmStudents = []

// students.forEach((student) => {
//     eatmStudents.push(student + "EATM")
// })

// console.log(students);
// console.log(eatmStudents);

// HOF

// let newEatmStudets = students.map((s) => s + "EATM")
// console.log( "newEATM",newEatmStudets);

let num = [1,2,3,4,5,6,7,8,9,10]

// let doubleNum = []

// num.forEach((n) => {
//     doubleNum.push(n * 2)
// })

// let doubleNum = num.map((n) => n * 2)
// console.log(doubleNum);
// let evenNum = [];
// num.forEach((n) => {
//     if (n % 2 == 0){
//         evenNum.push(n)
//     }
// })
// console.log(evenNum);

let evenNum = num.filter((n) => n % 2 == 0)
console.log(evenNum);

