let obj = {
  name: "peter",
  value: {
    name: "peter",
  },
};
let user = { ...obj };
// user.value.name = "bruce";
user.name = "bruce";
console.log("Obj: ", obj);
console.log("User: ", user);

// let obj = {
//   name: "peter",
//   address: {
//     city: "bangalore",
//     state: "KA",
//   },
// };
// let user = { ...obj };
// user.name = "bruce";
// user.address.city = "chennai";
// user.address.state = "TN";
// console.log("Obj: ", obj);
// console.log("User: ", user);

// let obj = {
//   name: "peter",
//   address: {
//     city: "bangalore",
//     state: "KA",
//   },
// };
// let user = JSON.parse(JSON.stringify(obj));
// user.name = "bruce";
// user.address.city = "chennai";
// user.address.state = "TN";
// console.log("Obj: ", obj);
// console.log("User: ", user);
