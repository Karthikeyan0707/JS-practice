var addTwoNumbers = function (l1, l2) {
  var j1 = parseInt(l1.join(""));
  var j2 = parseInt(l2.join(""));
  var sum = j1 + j2;
  var suml = sum.toString();
  let result = [];
  for (let i = 0; i < suml.length; i++) {
    result.push(suml[i]);
  }
  console.log(result.reverse());
};
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
