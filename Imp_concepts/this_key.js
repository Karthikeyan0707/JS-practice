// function My_Name(name) {
//   console.log(`My Name is ${name}`);
// }

// My_Name("Karthik");
// My_Name("Ram");

//IMPLICIT BINDING
// const person = {
//   name: "Karthik",
//   My_Name: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// person.My_Name();

//EXPLICIT BINDING
// const person = {
//   name: "Karthik",
// };
// function My_Name() {
//   console.log(`My name is ${this.name}`);
// }
// My_Name.call(person);

//NEW BINDING
// const person = {
//   name: "Karthik",
// };
// function Person(name) {
//   //this={}
//   this.name = name;
// }
// const p1 = new Person("Karthik");
// const p2 = new Person("Ram");

// console.log(p1.name, p2.name);

//DEFAULT BINDING
// const name = "SK"; // if it was browser
// globalThis.name = "SK"; //if it is node
// const person = {
//   name: "Karthik",
// };
// function My_Name() {
//   console.log(`My name is ${this.name}`);
// }
// My_Name();
