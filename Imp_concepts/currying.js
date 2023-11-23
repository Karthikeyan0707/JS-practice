function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curried_sum = curry(sum);
console.log(curried_sum(2)(3)(5));

// const add2 = curried_sum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);
