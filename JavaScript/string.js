let name = "bikash"
console.log(name.length);
console.log(name.charAt(1));
let capital = name.toUpperCase();
console.log(name);
console.log(capital);
console.log(capital.toLowerCase());

let firstName = "    Bikash Kumar Giri ";
console.log(firstName);
firstName = firstName.trim();
// console.log(firstName.trim());
// console.log(firstName.replaceAll(" ", ""));

let arrName = firstName.split("i");
console.log(arrName);

console.log(firstName.slice(2,6));
