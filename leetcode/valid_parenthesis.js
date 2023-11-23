var isValid = function (s) {
  var str_arr = s.split("");
  var i;
  for (i = 0; i < str_arr.length; i++) {
    str_arr;
    if (
      (str_arr[i] == "(" && str_arr[i + 1] == ")") ||
      (str_arr[i] == "{" && str_arr[i + 1] == "}") ||
      (str_arr[i] == "[" && str_arr[i + 1] == "]")
    ) {
      str_arr.splice(i, 2);
      str_arr;
      i = i - 2;
    }
  }
  if (str_arr.length == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};
var str = "{[]}";
isValid(str);

// function isValid(s) {
//   const stack = [];
//   const bracketPairs = { '(': ')', '{': '}', '[': ']' };

//   for (let i = 0; i < s.length; i++) {
//       const char = s[i];
//       if (bracketPairs[char]) {
//           stack.push(char);
//       } else {
//           const lastOpenBracket = stack.pop();
//           if (bracketPairs[lastOpenBracket] !== char) {
//               return false;
//           }
//       }
//   }

//   return stack.length === 0;
// }

// // Example usage:
// const inputString = "({[()]})";
// const isValidString = isValid(inputString);
// console.log(isValidString); // Output: true
