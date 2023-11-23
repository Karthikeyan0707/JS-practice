//using THEN

// let My_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 1000);
// });

// My_promise.then((message) => {
//   console.log(message);
// });

//using CATCH

// let My_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error!");
//     // resolve("Success!");
//   }, 1000);
// });

// My_promise.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// });

//using FINALLY
let My_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Success!");
    reject("Error!");
  }, 3000);
});

My_promise.then((message) => {
  console.log(message);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Im Done!");
  });
