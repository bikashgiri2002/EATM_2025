# Student Management System

## JavaScript File (script.js)
```javascript
// Getting input elements from the form
let stdName = document.getElementById("name");
let regdNo = document.getElementById("regdNo");
let mark = document.getElementById("mark");
let bookReturn = document.getElementById("bookReturn");

// Array to store student details
const students = [];

// Function to add a student from the form input
const addStudent = () => {
    let student = {
        name: stdName.value,
        regdNo: regdNo.value,
        mark: mark.value,
        bookReturn: bookReturn.checked
    };
    students.push(student); // Adding student to the array
    
    // Reset form fields after adding
    stdName.value = "";
    regdNo.value = "";
    mark.value = "";
    bookReturn.checked = false;
};

// Getting the div to display students
const allStudent = document.getElementById("allStudent");

// Function to display all students in a table
const displayStudent = () => {
    if (students.length > 0) {
        allStudent.innerHTML = "<h1> All Students </h1>";
        const table = document.createElement("table");
        
        // Creating the table header
        const headerRow = `<tr>
            <th>Name</th>
            <th>Regd No</th>
            <th>Mark</th>
            <th>Book Return</th>
        </tr>`;
        table.innerHTML = headerRow;
        
        // Adding student data to the table
        students.forEach((student) => {
            const row = `<tr>
                <td>${student.name}</td>
                <td>${student.regdNo}</td>
                <td>${student.mark}</td>
                <td>${student.bookReturn}</td>
            </tr>`;
            table.innerHTML += row;
        });
        
        allStudent.appendChild(table);
    } else {
        allStudent.innerHTML = "<h1> No Student </h1>";
    }
};
```

## HTML File (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Daku</title>
</head>
<body>
    <div>
        <!-- Form to add a new student -->
        <form id="add">
            Name: <input id="name" type="text"> <br>
            Regd No: <input id="regdNo" type="number"> <br>
            Mark: <input id="mark" type="number"> <br>
            Book Return: <input id="bookReturn" type="checkbox"><br>
            <button type="button" id="student" onclick="addStudent()">ADD Student</button>
        </form>
    </div>
    
    <div>
        <!-- Button to display all students -->
        <button id="showStudent" onclick="displayStudent()">Show Student</button>
    </div>
    
    <div id="allStudent"></div>
    
    <script src="script.js"></script>
</body>
</html>
```

## JavaScript File for Initial Student List
```javascript
// Creating student objects
let student1 = { name: "pratikshya", regdNo: 1, mark: 90, bookReturn: true };
let student2 = { name: "rajkrishna", regdNo: 2, mark: 89, bookReturn: false };
let student3 = { name: "riyan", regdNo: 3, mark: 91, bookReturn: true };
let student4 = { name: "binod", regdNo: 4, mark: 95, bookReturn: false };
let student5 = { name: "abhinash", regdNo: 5, mark: 85, bookReturn: true };
let student6 = { name: "satarupa", regdNo: 6, mark: 87, bookReturn: false };
let student7 = { name: "subhajyoti", regdNo: 7, mark: 86, bookReturn: true };

// Storing students in an array
let students = [student1, student2, student3, student4, student6, student7];

// Loop to display the first 4 student names
for(let i = 0; i < 4; i++) {
    console.log(`Name is: ${students[i].name}`);
}

// Filtering students who have not returned books
let dakuStudent = students.filter((daku) => daku.bookReturn === false);
console.log(dakuStudent);
```

## Explanation
- **HTML file** provides a form for user input and buttons to add and display students.
- **JavaScript file (script.js)** contains functions to add students dynamically and display them in a table.
- **Predefined students list** includes a few students with different marks and book return statuses.
- **Filtering & Displaying Data**:
  - Displays names of the first four students in the console.
  - Filters students who haven't returned their books and logs them as "Daku" students.

