//VAR - global scoped or function scoped, can be redeclared and updated
//Redeclaring a variable inside a block will also redeclare the variable outside the block.
//can impose problems.

// var tester = "hey hi";
// function newFunction() {
//   var hello = "hello";
//   // console.log(hello);
// }
// newFunction();
// console.log(hello); //hello is not defined

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello";

// var greeter = "hey hi";
// var times = 4;
// if (times > 3) {
//   var greeter = "say Hello instead";
// }
// console.log(greeter); //say Hello instead

//LET- block scoped, can be updated but not redelcared
//variables declared inside the block cannot be accessed outside the block.
//Redeclaring a variable inside a block will not redeclare the variable outside the block.
//can solve the problem that occurs in VAR.

// let greeting = "say Hi";
// let times = 4;
// if (times > 3) {
//   let hello = "say Hello instead";
//   console.log(hello); // "say Hello instead"
// }
// console.log(hello); // hello is not defined

// let greeting = "say Hi";
// if (true) {
//   let greeting = "say Hello instead";
//   console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// greeter = "say hello";
// let greeter; //reference Error
// console.log(greeter);

//CONST - block scoped, cannot be updated or re-declared
// const object cannot be updated, the properties of this objects can be updated.
// Change the elements of constant array, Change the properties of constant object

// const greeting = {
//   message: "say Hi",
//   times: 4,
// };
// greeting.message = "say Hello instead";

//NESTED function scope
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

let arr = [10, "apple", 3, "banana", 20, "orange", true, false];

arr.sort(function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    // console.log("a1: ", a, "b1: ", b);
    return a - b;
  } else if (typeof a === "string" && typeof b === "string") {
    // console.log("a2: ", a, "b2: ", b);
    return a.localeCompare(b);
  } else if (typeof a === "boolean") {
    return -1;
  } else {
    // console.log("a3: ", a, "b3: ", b);
    return typeof a === "number" ? -1 : 1;
  }
});

console.log(arr);
