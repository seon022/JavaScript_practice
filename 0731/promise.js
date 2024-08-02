// function callback() {
//   console.log("콜백함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업수행함.");

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { name: "Kim", email: "kim@gmail.com" },
//       { name: "Lee", email: "lee@gmail.com" },
//       { name: "kang", email: "kang@gmail.com" },
//     ]);
//   }, 500);
// }
// function findUser(name, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.name === name);
//     callback(user);
//   });
// }
// let user = findUser("Lee", (user) => {
//   console.log(user);
// });

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//   alert("안녕하세용");
// }

// let success = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         resolve([
//           { name: "Kim", email: "kim@gmail.com" },
//           { name: "Lee", email: "lee@gmail.com" },
//           { name: "kang", email: "kang@gmail.com" },
//         ]);
//       }, 1000);
//     } else {
//       reject("실패");
//     }
//   });
// }
// let promise = getUser();
// promise
//   .then((users) => users.find(users.name === "Kim"))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("작업완료"));

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(10), 2000)
// );
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(20), 1000)
// );
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000));
// let promises = [p1, p2, p3];

// Promise.all(promises).then((results) => {
//   const total = results.reduce((s, r) => s + r);
//   console.log(`결과 : ${results}`);
//   console.log(`합계 : ${total}`);
// });

Promise.allSettled(promises).then((results) => {
  const fulfilledResults = results
    .filter((result) => result.status === "fulfiled")
    .map((result) => result.value);
  const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
  console.log(`결과 : ${fulfilledResults}`);
  console.log(`합계 : ${total}`);
});

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "kim@gmail.com" },
//         { name: "Lee", email: "lee@gmail.com" },
//         { name: "kang", email: "kang@gmail.com" },
//       ]);
//     }, 1000);
//   });
// }
// function findUser(users) {
//   return new Promise((resolve, reject) => {
//     console.log(users);
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === "Kim"));
//     }, 1000);
//   });
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     console.log(user);
//     setTimeout(() => {
//       resolve(user.mail);
//     }, 3000);
//   });
// }

// getUser().then(findUser).then(getEmail).then(console.log);

function getA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("A");
      resolve("A");
    }, 1000);
  });
}

function getB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("B");
      resolve("B");
    }, 2000);
  });
}

Promise.all([getA(), getB()]).then((results) => {
  console.log(`${results} 완료!`); // ["A", "B"]
});
// --------------
// 프로미스는 성공 or 실패 상태를 담고있는 객체
// 콜백지옥문제해결 => 가독성
// 비동기 작업 원하는 시점에 해결

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A완료");
  }, 1000);
});
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B완료");
  }, 2000);
});
Promise.all([promiseA, promiseB]).then((results) => {
  console.log(`완료!!`);
});
