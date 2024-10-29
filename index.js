// console.log(`Hello`);
// console.log(`I like pizza`);

// // window.alert(`This is an alert`);
// // window.alert(`I like Pizza`);
// //this is the comment
// document.getElementById("h1").textContent = `Hello`;
// let online = true;
// console.log(`Bro is online:${online}`);

// let forSale = false;
// console.log(`Dis you sale it:${forSale}`);
// let fullName = "bivek";
// let age = 27;
// let student = false;

// // document.getElementById("p1").textContent = `my name is ${fullName}`;
// // document.getElementById("p2").textContent = `I am ${age} years old`;
// // document.getElementById("p3").textContent = `Am i enrolled in c`;

// // age = Math.floor(age / 2);

// // age += 1;
// age -= 1;
// console.log(age);

// let students = 30;
// console.log(students);
// let result = 6 / 2 ** 7;
// console.log(result);
// let userName;
// userName = window.prompt("What is your username?");
// console.log(userName);

// let birthPlace;
// birthPlace = window.prompt("Tell  me the place that you were born?");
// console.log(birthPlace);
// let userName;
// document.getElementById("myButton").onclick = function () {
//   userName = document.getElementById("mytext").value;
//   document.getElementById("h1").textContent = `Hello ${userName}`;
// };
let username;
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("h1").textContent = `hello ${username}`;
};
