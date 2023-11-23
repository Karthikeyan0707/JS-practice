function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Success!");
      reject("Error!");
    }, 1000);
  });
}

async function execute() {
  try {
    let message = await doSomething();
    console.log(message);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Im Done!");
  }
}
execute();

// function doSomething() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success!");
//       // reject("Error!");
//     }, 1000);
//   });
// }

// async function execute() {
//   let message = await doSomething()
//     .then((message) => console.log(message))
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => console.log("Im Done!"));
// }

// execute();
