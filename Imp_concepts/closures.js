// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
console.log(fn);
fn();
fn();

// const numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));

// function myFunc(total, num) {
//   console.log(total);
//   console.log("num:", num);
//   return total - num;
// }

// setTimeout(() => {
//   console.log("hello");
// }, 2000);
// console.log("hi");
