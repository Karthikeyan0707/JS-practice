function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise one resolved!");
      // reject('promise one rejected!');
    }, 500);
  });
}

const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("promise two resolved!");
      reject("promise two rejected!");
    }, 600);
  });
};

const promiseThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise three resolved!");
      //   reject("promise three rejected!");
    }, 700);
  });
};

const throwErrorAfterSomeTime = () => {
  new Promise((_, reject) => {
    setTimeout(() => {
      reject("took too long");
    }, 600);
  });
};

async function fetchData() {
  try {
    const beforeTime = new Date();
    const responseOne = await promiseOne();
    const responseTwo = await promiseTwo();
    const responseThree = await promiseThree();
    const afterTime = new Date();

    const beforeTime1 = new Date();
    const response = await Promise.race([
      promiseOne(),
      promiseTwo(),
      promiseThree(),
      //   throwErrorAfterSomeTime(),
    ]);
    const afterTime1 = new Date();

    console.log(
      "response from promise.all",
      response,
      afterTime1 - beforeTime1
    );
    console.log("code");

    console.log(
      responseOne,
      responseTwo,
      responseThree,
      afterTime - beforeTime
    );
  } catch (error) {
    console.log("error:", error);
  }
}
fetchData();
