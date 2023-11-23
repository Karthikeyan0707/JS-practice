// console.log("hello world")
// var city = 'mumbai'
// console.log(city)

//PRINTING N ELEMENTS OF AN ARRAY
//const numbers=[1,2,3,4,5,6]
//result=[]
/*for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i])
}*/
/*for(const number of numbers)
{
    result.push(number*2)
}
console.log(result)*/

//USING FUNCTIONS PRINT MULTIPLES OF A NUMBER
/*const mul=(numbers)=>{
    let result=[]
    for(const number of numbers){
    result.push(number*2)
    }
    return result
}
console.log(mul([1,2,3,4,5,6]))*/

//LENGTH OF A STRING
/*const length=()=>{
   let result=0
    for(const index in sentence){
        result=Number(index)+1
    }
    return result
//OR
    return sentence.length
}
const sentence=prompt("write ur sentence")
console.log(length(sentence))*/

//FUNCTION THAT ADDS ALL THE NUMBERS IN AN ARRAY
/*const sum=()=>{
    const numbers=[1,2,3,4,5]
    result=0
    for(let i=0;i<numbers.length;i++){
        result=result+numbers[i]
    }
    return { result }
}
console.log(sum())*/
// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
// document.write(myFunction(4, 3))

// const pi = 3.14;
// let person = "John Doe";
// let answer = 'Yes I am!';

// console.log(pi)
// console.log(person+" "+answer)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// Display data from the object:
// console.log(person.fullName());

//   function myFunction() {
//     let text = "This is Microsoft";
//     console.log(text.replace("Microsoft","W3Schools"));
//   }
// myFunction();

// let i,j,k
const prompt = require("prompt-sync")();
let n = prompt(parseInt("enter a number"));
let a = "";

for (i = 0; i < n; i++) {
  for (k = n; k >= i; k--) {
    a += " ";
  }
  for (j = 0; j <= i; j++) {
    a += "*";
  }
  a += "\n";
}
console.log(a);

// function greeting(name) {
//   console.log(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);
