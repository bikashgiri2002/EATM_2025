// Object
let student1 = {
    name : "pratikshya",
    regdNo : 1,
    mark : 90,
    bookReturn : true
}

let student2 = {
    name : "rajkrishna",
    regdNo : 2,
    mark : 89,
    bookReturn : false
}

let student3 = {
    name : "riyan",
    regdNo : 3,
    mark : 91,
    bookReturn : true
}

let student4 = {
    name : "binod",
    regdNo : 4,
    mark : 95,
    bookReturn : false
}

let student5 = {
    name : "abhinash",
    regdNo : 5,
    mark : 85,
    bookReturn : true
}

let student6 = {
    name : "satarupa",
    regdNo : 6,
    mark : 87,
    bookReturn : false
}

let student7 = {
    name : "subhajyoti",
    regdNo : 7,
    mark : 86,
    bookReturn : true
}

let students = [student1, student2, student3, student4, student6, student7]

for(let i = 0; i < 4; i++) {
    console.log(`name is : ${students[i].name}`);
}

// students.forEach((stu) => {
//     console.log(stu.regdNo);
// })

// let oGrade = students.filter((e) => e.mark >= 90)
// console.log(oGrade);

// let studentsBook = students.map((e) => ({...e, bookReturn : true}))
// console.log(studentsBook);

let dakuStudent = students.filter((daku) => daku.bookReturn === false)
console.log(dakuStudent);

