// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(5);
//       resolve(5);
//     }, 1000);
//   });
// }
// function getProduct(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(num * 10);
//       resolve(num * 10);
//     }, 5000);
//   });
// }
// getNum()
//   .then(getProduct)
//   .catch((error) => console.log(error));

let success = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      console.log(5);
      resolve(5);
    } else {
      reject("에러!!");
    }
  }, 1000);
});

promise
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * 10);
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
