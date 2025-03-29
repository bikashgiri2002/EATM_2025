// // let human = ["bikash", 22, 5.6]

let human = {
  name: "Bikash",
  age: 22,
  height: 5.6,
};

console.log(human.name);
console.log(human["name"]);

human.weight = 50;

console.log(human);

delete human.age;

console.log(human);

human.weight = 52;

console.log(human);

// const student = {
//   name: "Subha Jyoti",
//   college: "EATM",
//   address: {
//     street: "sector 1",
//     city: "Bhubaneswar",
//     state: "Odisha",
//   },
//   mark: [8.9, 9.2, 9.0, 9.1],
// };

// console.log(student.address);
// console.log(student.address.state);
// console.log(student.mark[0]);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// console.log("name" in student);
// console.log("age" in student);

const students = [
  {
    name: "Subha Jyoti",
    college: "EATM",
    address: {
      street: "sector 1",
      city: "Bhubaneswar",
      state: "Odisha",
    },
    mark: [8.9, 9.2, 9.0, 9.1],
  },
  {
    name: "Rahul",
    college: "MIT",
    address: {
      street: "sector 2",
      city: "Mumbai",
      state: "Maharashtra",
    },
    mark: [9.5, 9.8, 9.6, 9.7],
  },
  {
    name: "Rajesh",
    college: "IIT",
    address: {
      street: "sector 3",
      city: "Delhi",
      state: "Delhi",
    },
    mark: [9.3, 9.4, 9.2, 9.5],
  },
  {
    name: "Suresh",
    college: "NIT",
    address: {
      street: "sector 4",
      city: "Kolkata",
      state: "West Bengal",
    },
    mark: [9.1, 9.0, 8.9, 9.2],
  },
  {
    name: "Mahesh",
    college: "IIIT",
    address: {
      street: "sector 5",
      city: "Chennai",
      state: "Tamil Nadu",
    },
    mark: [8.8, 8.9, 9.0, 9.1],
  },
];

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
//     console.log(students[i].college);
//     console.log(students[i].address.state);
// }

// students.forEach((e) => {
//     console.log("name: ", e.name);
//     console.log("college: ", e.college);
//     console.log("state: ", e.address.state);
// });


// let a = 10
// let b = a

// a = 20

// console.log(a)

// console.log(b)

// let a = {name : "bikash"}
// let b = a

// a.name = "subha"

// console.log(a)

// console.log(b)


// const numbers = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : 4
// }

// const {a, b} = numbers;

// console.log(a);

// console.log(b);

