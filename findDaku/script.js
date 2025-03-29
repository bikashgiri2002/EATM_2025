let stdName = document.getElementById("name");
let regdNo = document.getElementById("regdNo")
let mark = document.getElementById("mark")
let bookReturn = document.getElementById("bookReturn")
const students = [];

const addStudent = () => {
    let student = {
        name : stdName.value,
        regdNo : regdNo.value,
        mark : mark.value,
        bookReturn : bookReturn.checked
    }
    students.push(student)
    // console.log(students);
    stdName.value = "";
    regdNo.value = "";
    mark.value = "";
    bookReturn.checked = false;
}
const allStudent = document.getElementById("allStudent");
const allStudentBtn = document.getElementById("showStudent");

// Table of students
const displayStudent = (title, students, allStudent) => {
    if (students.length > 0) {
        allStudent.innerHTML = `<h1> ${title} </h1>`;
        const table = document.createElement("table");
        const headerRow = `<tr>
        <th> Name </th>
        <th> Regd No </th>
        <th> Mark </th>
        <th> Book Return </th>
        </tr>`;
        table.innerHTML = headerRow;

        students.forEach((student) => {
            const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.regdNo}</td>
                <td>${student.mark}</td>
                <td>${student.bookReturn}</td>
            </tr>`;
            table.innerHTML += row;
        })
        allStudent.appendChild(table)
    }else {
        allStudent.innerHTML = "<h1> No Student </h1>";
    }
}

allStudentBtn.addEventListener("click", () => {
    displayStudent("All Student", students, allStudent);
})

const dakuStudent = document.getElementById("dakuStudent");
const dakuStudentBtn = document.getElementById("showDakuStudent");

// filter data
const allDakuStudent = students.filter((e) => e.bookReturn != true);

dakuStudentBtn.addEventListener("click", () => {
    const allDakuStudent = students.filter((e) => e.bookReturn != true);
    displayStudent("Daku Student", allDakuStudent, dakuStudent);
})
