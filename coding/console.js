const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", function all(answer) {
//   console.log(`Oh, so your name is ${answer}`);
console.log(answer)
  console.log("Closing the interface");
  rl.close();
}
);
var result=all(2)
console.log(result)